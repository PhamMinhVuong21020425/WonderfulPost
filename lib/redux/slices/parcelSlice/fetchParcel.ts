import axios from '@/lib/axios';
import type Parcel from '@/app/types/ParcelType';

export const fetchAllParcels = async (): Promise<{ data: any }> => {
    const response = await axios.get<any>('/api/parcels', {
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return response
}

export const fetchDeliveredParcels = async (id: string): Promise<{ data: any }> => {
    const response = await axios.get<any>(`/api/branches/${id}/out`, {
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return response
}

export const fetchReceivedParcels = async (id: string): Promise<{ data: any }> => {
    const response = await axios.get<any>(`/api/branches/${id}/in`, {
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return response
}