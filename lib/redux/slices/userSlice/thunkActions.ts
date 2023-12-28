/* Instruments */
import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'
import type { ReduxThunkAction } from '@/lib/redux'
import { fetchUser } from './fetchUser'

export const getUserInfoAsync = createAppAsyncThunk(
    'user/fetchUser',
    async () => {
        const response = await fetchUser()

        // The value we return becomes the `fulfilled` action payload
        return response.data
    }
)