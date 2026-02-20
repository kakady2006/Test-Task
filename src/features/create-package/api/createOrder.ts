import { API_URL } from "@/shared/api/base";

interface CreateOrderData {
  pickupPoint: {
    id: string;
    title: string;
  };
  date: string;
  packageNumber: string;
  recipientName: string;
}

export const createOrder = async (data: CreateOrderData) => {
  const res = await fetch(`${API_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: crypto.randomUUID(),
      date: data.date,
      pickupPoint: {
        id: data.pickupPoint.id,
        title: data.pickupPoint.title
      },
      packageNumber: Number(data.packageNumber),
      recipientName: data.recipientName,
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to create order");
  }

  return res.json();
};