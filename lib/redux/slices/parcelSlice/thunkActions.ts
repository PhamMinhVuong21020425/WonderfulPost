/* Instruments */
import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'
import type { ReduxThunkAction } from '@/lib/redux'
import { fetchAllParcels } from './fetchParcel'
import { selectParcel } from './selectors'

export const getAllParcelsInfoAsync = createAppAsyncThunk(
    'user/fetchParcel',
    async () => {
        const response = await fetchAllParcels()

        // The value we return becomes the `fulfilled` action payload
        return response.data
    }
)