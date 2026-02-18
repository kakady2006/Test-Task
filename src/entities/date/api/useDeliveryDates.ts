import useSWR from 'swr';
import { fetcher } from '@/shared/api/base';
import { PickupPointDates } from '../models/types';

export const useDeliveryDates = () => {
    const { data, error, isLoading } = useSWR<PickupPointDates[]>('/dates', fetcher);

    return {
        deliveryDates: data,
        isLoading,
        isError: error
    };
};
