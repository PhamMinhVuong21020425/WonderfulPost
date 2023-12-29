/* Instruments */
import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'
import type { ReduxThunkAction } from '@/lib/redux'
import { fetchAllParcels, fetchDeliveredParcels, fetchReceivedParcels, addParcel, successParcelTrack, goingParcelTrack } from './fetchParcel'
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

export const putSuccessAsync = createAppAsyncThunk(
    'user/putSuccessParcel',
    async (id: number) => {
        const response = await successParcelTrack(id)

        // The value we return becomes the `fulfilled` action payload
        return response.data
    }
)

export const putGoingAsync = createAppAsyncThunk(
    'user/goingSuccessParcel',
    async (id: number) => {
        const response = await goingParcelTrack(id)

        // The value we return becomes the `fulfilled` action payload
        return response.data
    }
)