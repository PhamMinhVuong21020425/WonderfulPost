import axios from '@/lib/axios';
import type User from '@/app/types/UserType';
import type Office from '@/app/types/OfficeType';

export const fetchAllStaffs = async (): Promise<{ data: User[] }> => {
    const response = await axios.get<User[]>('/api/users/all-staffs', {
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

export const addStaff = async (formData: object): Promise<{ data: User }> => {
    const response = await axios.post<User>('/api/users/all-staffs', formData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return response
}

export const editStaff = async (formData: object): Promise<{ data: User }> => {
    const response = await axios.put<User>('/api/users/all-staffs', formData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return response
}

export const deleteStaff = async (id: string): Promise<{ data: string }> => {
    const response = await axios.delete<string>('/api/users/all-staffs', { data: { id } })

    return response
}
