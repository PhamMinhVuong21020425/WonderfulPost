/* Instruments */
import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'
import type { ReduxThunkAction } from '@/lib/redux'
import { fetchAllParcels, fetchDeliveredParcels, fetchReceivedParcels } from './fetchParcel'
import { selectParcel } from './selectors'

export const getAllParcelsInfoAsync = createAppAsyncThunk(
    'user/fetchParcel',
    async () => {
        const response = await fetchAllParcels()

        // The value we return becomes the `fulfilled` action payload
        return response.data
    }
)

export const getDeliveredParcelsInfoAsync = createAppAsyncThunk(
    'user/fetchDeliveredParcel',
    async (id: string) => {
        const response = await fetchDeliveredParcels(id)

        console.log(response.data)

        // The value we return becomes the `fulfilled` action payload
        return response.data
    }
)

export const getReceivedParcelsInfoAsync = createAppAsyncThunk(
    'user/fetchReceivedParcel',
    async (id: string) => {
        const response = await fetchReceivedParcels(id)

        console.log(response.data)

        // The value we return becomes the `fulfilled` action payload
        return response.data
    }
)