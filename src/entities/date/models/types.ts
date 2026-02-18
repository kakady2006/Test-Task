export interface DateInfo {
    availableForOrderPickup: boolean;
    date: string;
}
export interface PickupPointDates {
    id: string;
    data: Record<string, DateInfo>;
}