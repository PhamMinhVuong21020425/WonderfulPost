import axios from '@/lib/axios';
import type Parcel from '@/app/types/ParcelType';
import ParcelTrack from '@/app/types/ParcelTrackType';

export const fetchAllParcels = async (): Promise<{ data: Parcel[] }> => {
    const response = await axios.get<Parcel[]>('/api/parcels', {
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return response
}

export const fetchDeliveredParcels = async (id: string): Promise<{ data: ParcelTrack[] }> => {
    const response = await axios.get<ParcelTrack[]>(`/api/branches/${id}/out`, {
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return response
}

export const fetchReceivedParcels = async (id: string): Promise<{ data: ParcelTrack[] }> => {
    const response = await axios.get<ParcelTrack[]>(`/api/branches/${id}/in`, {
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return response
}

export const addParcel = async (formData: object): Promise<{ data: any }> => {
    const response = await axios.post<any>(`/api/parcels`, {
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return response
}