import useSWR from 'swr';
import { fetcher } from '@/shared/api/base';
import { PickupPoint } from '../models/types';

export const usePickupPoints = () => {
    const { data, error, isLoading } = useSWR<PickupPoint[]>('/pickupPoints', fetcher);

    return {
        pickupPoints: data,
        isLoading,
        isError: error
    };
};