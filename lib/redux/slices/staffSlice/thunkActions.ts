/* Instruments */
import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'
import type { ReduxThunkAction } from '@/lib/redux'
import { fetchAllStaffs } from './fetchStaff'

export const getAllStaffsInfoAsync = createAppAsyncThunk(
    'user/fetchStaff',
    async () => {
        const response = await fetchAllStaffs()

        // The value we return becomes the `fulfilled` action payload
        return response.data
    }
)