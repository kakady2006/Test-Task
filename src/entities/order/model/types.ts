export interface Order {
  id: string;
  date: string;
  pickupPoint: {
    id: string;
    title: string;
  };
  packageNumber: number;
  recipientName: string;
}
