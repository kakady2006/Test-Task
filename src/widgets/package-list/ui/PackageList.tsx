import { getOrders } from "@/entities/order/api/getOrders";
import { Order } from "@/entities/order/model/types";

export const PackageList = async () => {
    const orders: Order[] = await getOrders();

    return (
        <div className="w-full max-w-150 bg-white rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
                <div className="min-w-150">
                    <div className="h-13.5 px-6 grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-center border-b border-gray-100 text-sm font-medium text-gray-500">
                        <div>Дата выдачи</div>
                        <div className="w-px h-5.5 bg-gray-200 mx-2"></div>
                        <div>Пункт выдачи</div>
                        <div className="w-px h-5.5 bg-gray-200 mx-2"></div>
                        <div>Номер посылки</div>
                        <div className="w-px h-5.5 bg-gray-200 mx-2"></div>
                        <div>Имя</div>
                    </div>

                    <div className="divide-y divide-gray-100">
                        {orders.map((order) => (
                            <div key={order.id} className="h-13.5 px-6 grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-center text-sm text-gray-900 hover:bg-gray-50 transition-colors">
                                <div>{order.date}</div>
                                <div className="w-px mx-2"></div>
                                <div className="truncate pr-2" title={order.pickupPoint.title}>
                                    {order.pickupPoint.title}
                                </div>
                                <div className="w-px mx-2"></div>
                                <div>{order.packageNumber}</div>
                                <div className="w-px mx-2"></div>
                                <div className="truncate" title={order.recipientName}>
                                    {order.recipientName}
                                </div>
                            </div>
                        ))}

                        {orders.length === 0 && (
                            <div className="h-13.5 px-6 flex items-center justify-center text-sm text-gray-400">
                                Список пуст
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
