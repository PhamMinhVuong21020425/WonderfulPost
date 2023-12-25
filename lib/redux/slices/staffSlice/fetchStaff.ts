import axios from '@/lib/axios';
import type User from '@/app/types/UserType';

export const fetchAllStaffs = async (): Promise<{ data: User[] }> => {
    const response = await axios.get<User[]>('/api/users/branch-staffs', {
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return response
}
