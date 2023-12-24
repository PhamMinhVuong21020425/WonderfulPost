import axios from '@/lib/axios';
import type User from '@/app/types/UserType';

export const fetchUser = async (): Promise<{ data: User }> => {
    const response = await axios.get('/api/users', {
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return response
}
