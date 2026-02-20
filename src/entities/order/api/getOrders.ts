import {API_URL} from "@/shared/api/base";

export const getOrders = async () => {
    const res = await fetch(`${API_URL}/orders`, {
        cache: "no-store",
    });
    if (!res.ok) {
        throw new Error("Failed to fetch orders");
    }
    return res.json();
};
