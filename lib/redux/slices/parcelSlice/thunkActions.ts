/* Instruments */
import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'
import type { ReduxThunkAction } from '@/lib/redux'
import { fetchAllParcels, fetchDeliveredParcels, fetchReceivedParcels, addParcel } from './fetchParcel'
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

        // The value we return becomes the `fulfilled` action payload
        return response.data
    }
)

export const getReceivedParcelsInfoAsync = createAppAsyncThunk(
    'user/fetchReceivedParcel',
    async (id: string) => {
        const response = await fetchReceivedParcels(id)

        // The value we return becomes the `fulfilled` action payload
        return response.data
    }
)

export const addParcelAsync = createAppAsyncThunk(
    'user/addParcel',
    async (formData: object) => {
        const response = await addParcel(formData)

        // The value we return becomes the `fulfilled` action payload
        return response.data
    }
)