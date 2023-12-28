/* Instruments */
import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'
import type { ReduxThunkAction } from '@/lib/redux'
import { fetchAllOffices } from './fetchOffice'
import { selectOffice } from './selectors'

export const getAllOfficesInfoAsync = createAppAsyncThunk(
    'user/fetchOffice',
    async () => {
        const response = await fetchAllOffices()

        // The value we return becomes the `fulfilled` action payload
        return response.data
    }
)