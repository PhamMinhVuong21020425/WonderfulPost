import axios from '@/lib/axios';
import type Office from '@/app/types/OfficeType';

export const fetchAllOffices = async (): Promise<{ data: Office[] }> => {
    const response = await axios.get<Office[]>('/api/branches', {
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return response
}
