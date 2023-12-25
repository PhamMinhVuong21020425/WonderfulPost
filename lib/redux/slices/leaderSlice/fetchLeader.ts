import axios from '@/lib/axios';
import type User from '@/app/types/UserType';
import type Office from '@/app/types/OfficeType';

export const fetchAllLeaders = async (): Promise<{ data: User[] }> => {
    const response = await axios.get<User[]>('/api/users/all-leaders', {
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return response
}

export const fetchSubOffices = async (id: string): Promise<{ data: Office[] }> => {
    const response = await axios.get<Office[]>(`/api/branches/${id}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return response
}