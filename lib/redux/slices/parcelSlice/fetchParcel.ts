import axios from '@/lib/axios';
import type Parcel from '@/app/types/ParcelType';

export const fetchAllParcels = async (): Promise<{ data: Parcel[] }> => {
    const response = await axios.get<Parcel[]>('/api/parcel', {
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return response
}