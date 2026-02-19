"use client";
import { useState, useEffect, useMemo } from "react";
import { usePickupPoints } from "@/entities/pickup-point/api/usePickupPoints";
import { useDeliveryDates } from "@/entities/date/api/useDeliveryDates";

const PackageCreateForm = () => {
    const { pickupPoints } = usePickupPoints();
    const { deliveryDates } = useDeliveryDates();
    const [selectedPickupPointId, setSelectedPickupPointId] = useState("");
    const [isPackageNumberTouched, setIsPackageNumberTouched] = useState(false);
    const [isRecipientNameTouched, setIsRecipientNameTouched] = useState(false);
    
    const [packageNumber, setPackageNumber] = useState("");
    const [recipientName, setRecipientName] = useState("");
    const [date, setDate] = useState("");

    const currentPickupPointDates = useMemo(() => 
        deliveryDates?.find((d) => d.id === selectedPickupPointId),
        [deliveryDates, selectedPickupPointId]
    );

    const availableDates = useMemo(() => 
        currentPickupPointDates
            ? Object.entries(currentPickupPointDates.data)
                .filter(([, info]) => info.availableForOrderPickup)
                .map(([date]) => date)
            : [],
        [currentPickupPointDates]
    );

    useEffect(() => {
        if (pickupPoints && pickupPoints.length > 0 && !selectedPickupPointId) {
            setSelectedPickupPointId(pickupPoints[0].id);
        }
    }, [pickupPoints, selectedPickupPointId]);

    useEffect(() => {
        if (availableDates.length > 0) {
            if (!date || !availableDates.includes(date)) {
                setDate(availableDates[0]);
            }
        }
    }, [availableDates, date]);

    const packageNumberError = isPackageNumberTouched && !packageNumber.trim();
    const recipientNameError = isRecipientNameTouched && !recipientName.trim();

    const isFormValid = Boolean(
        selectedPickupPointId && 
        date && 
        packageNumber.trim() && 
        recipientName.trim()
    );

    const arrowSvg = "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239CA3AF' stroke-width='1.5'%3e%3cpath stroke-linecap='round' stroke-linejoin='round' d='M16 10l-4 4-4-4' /%3e%3c/svg%3e\")";

    return (
        <div className="flex flex-col w-full h-full bg-white sm:w-113.5 sm:h-auto sm:rounded-3xl">
            <div className="h-14 px-6 py-4 flex items-center border-gray-100 sm:border-none flex-none">
                <h1 className="text-lg font-bold leading-6">Добавление посылки</h1>
            </div>
            <div className="flex-1 p-6 overflow-y-auto">
                <div className="space-y-2">
                    <label htmlFor="pickup-point" className="block text-sm font-medium">
                        Пункт выдачи
                    </label>
                    <select
                        id="pickup-point"
                        className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm appearance-none bg-no-repeat pr-10 outline-none focus:border-blue-500"
                        style={{
                            backgroundImage: arrowSvg,
                            backgroundPosition: "right 0.75rem center",
                            backgroundSize: "1.5rem 1.5rem"
                        }}
                        value={selectedPickupPointId}
                        onChange={(e) => {
                            setSelectedPickupPointId(e.target.value);
                        }}
                    >
                        {pickupPoints?.map((point) => (
                            <option key={point.id} value={point.id}>
                                {point.title}
                            </option>
                        ))}
                    </select>
                    <label htmlFor="date" className="block text-sm font-medium">
                        Дата выдачи
                    </label>
                    <select
                        id="date"
                        className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm appearance-none bg-no-repeat pr-10 outline-none focus:border-blue-500"
                        style={{
                            backgroundImage: arrowSvg,
                            backgroundPosition: "right 0.75rem center",
                            backgroundSize: "1.5rem 1.5rem"
                        }}
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        disabled={!selectedPickupPointId || availableDates.length === 0}
                    >
                        {availableDates.map((date) => (
                            <option key={date} value={date}>
                                {date}
                            </option>
                        ))}
                    </select>
                    <label htmlFor="packageNumber" className="block text-sm font-medium">
                        Номер посылки
                    </label>
                    <input
                        type="text"
                        id="packageNumber"
                        className={`block w-full rounded-lg border p-2.5 text-sm outline-none
                            ${packageNumberError
                            ? "border-red-500 focus:border-red-500"
                            : "border-gray-300 focus:border-blue-500"
                        }`}
                        placeholder="Введите номер"
                        value={packageNumber}
                        onChange={(e) => setPackageNumber(e.target.value)}
                        onBlur={() => setIsPackageNumberTouched(true)}
                    />
                    {packageNumberError && (
                        <p className="text-red-500 text-xs mt-1">Необходимо ввести номер посылки</p>
                    )}
                    <label htmlFor="name" className="block text-sm font-medium">
                        Имя
                    </label>
                    <input
                        type="text"
                        id="name"
                        className={`block w-full rounded-lg border p-2.5 text-sm outline-none
                            ${recipientNameError
                            ? "border-red-500 focus:border-red-500"
                            : "border-gray-300 focus:border-blue-500"
                        }`}
                        placeholder="Введите имя"
                        value={recipientName}
                        onChange={(e) => setRecipientName(e.target.value)}
                        onBlur={() => setIsRecipientNameTouched(true)}
                    />
                    {recipientNameError && (
                        <p className="text-red-500 text-xs mt-1">Необходимо ввести имя</p>
                    )}
                </div>
            </div>
            <div className="h-18 px-6 py-4 border-t border-[#F3F4F6] flex items-center justify-end flex-none">
                <button
                    type="button"
                    disabled={!isFormValid}
                    className={`h-11.5 w-full rounded-lg flex items-center justify-center font-medium transition-colors
                    ${isFormValid
                        ? "bg-[#3F83F8] text-white hover:bg-blue-600"
                        : "bg-[#F3F4F6] text-gray-400 cursor-not-allowed"
                    }`}
                >
                    Добавить
                </button>
            </div>
        </div>
    );
};
export default PackageCreateForm;
