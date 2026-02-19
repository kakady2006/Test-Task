"use client";
import { useState } from "react";
import { usePickupPoints } from "@/entities/pickup-point/api/usePickupPoints";
import { useDeliveryDates } from "@/entities/date/api/useDeliveryDates";

const PackageCreateForm = () => {
    const { pickupPoints } = usePickupPoints();
    const { deliveryDates } = useDeliveryDates();
    const [selectedPickupPointId, setSelectedPickupPointId] = useState("");

    const currentPickupPointDates = deliveryDates?.find(
        (d) => d.id === selectedPickupPointId
    );

    const availableDates = currentPickupPointDates
        ? Object.entries(currentPickupPointDates.data)
            .filter(([_, info]) => info.availableForOrderPickup)
            .map(([date]) => date)
        : [];

    let isFormValid;
    return (
        <div className="flex flex-col w-full h-full bg-white sm:w-113.5 sm:h-auto sm:rounded-3xl ">
            <div className="h-14 px-6 py-4 flex items-center">
                <h1 className="text-lg font-bold leading-6">Добавление посылки</h1>
            </div>
            <div className="grow p-6 overflow-y-auto">
                <div className="space-y-2">
                    <label htmlFor="pickup-point" className="block text-sm font-medium">
                        Пункт выдачи
                    </label>
                    <select
                        id="pickup-point"
                        className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm "
                        value={selectedPickupPointId}
                        onChange={(e) => setSelectedPickupPointId(e.target.value)}
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
                        className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm "
                        disabled={!selectedPickupPointId || availableDates.length === 0}
                    >
                        {availableDates.map((date) => (
                            <option key={date} value={date}>
                                {date}
                            </option>
                        ))}
                    </select>
                    <label htmlFor="id" className="block text-sm font-medium">
                        Номер посылки
                    </label>
                    <input
                        type="text"
                        id="id"
                        className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm "
                        placeholder="Введите номер"
                    />
                    <label htmlFor="name" className="block text-sm font-medium">
                        Имя
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm "
                        placeholder="Введите имя"
                    />
                </div>
            </div>
            <div className="h-18 px-6 py-4 border-t border-[#F3F4F6] flex items-center justify-end">
                Добавить
            </div>
        </div>
    );
};
export default PackageCreateForm;
