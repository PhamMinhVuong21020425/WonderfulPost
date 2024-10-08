/* Instruments */
import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'
import type { ReduxThunkAction } from '@/lib/redux'
import { fetchAllParcels, fetchDeliveredParcels, fetchReceivedParcels, addParcel, deleteParcel, successParcelTrack, goingParcelTrack } from './fetchParcel'
import { selectParcel } from './selectors'

export const getAllParcelsInfoAsync = createAppAsyncThunk(
    'parcel/fetchParcel',
    async () => {
        const response = await fetchAllParcels()

        // The value we return becomes the `fulfilled` action payload
        return response.data
    }
)

export const getDeliveredParcelsInfoAsync = createAppAsyncThunk(
    'parcel/fetchDeliveredParcel',
    async (id: string) => {
        const response = await fetchDeliveredParcels(id)

        // The value we return becomes the `fulfilled` action payload
        return response.data
    }
)

export const getReceivedParcelsInfoAsync = createAppAsyncThunk(
    'parcel/fetchReceivedParcel',
    async (id: string) => {
        const response = await fetchReceivedParcels(id)

        // The value we return becomes the `fulfilled` action payload
        return response.data
    }
)

export const addParcelAsync = createAppAsyncThunk(
    'parcel/addParcel',
    async (formData: object) => {
        const response = await addParcel(formData)

        // The value we return becomes the `fulfilled` action payload
        return response.data
    }
)

export const deleteParcelAsync = createAppAsyncThunk(
    'parcel/deleteParcel',
    async (id: number) => {
        const response = await deleteParcel(id)

        // The value we return becomes the `fulfilled` action payload
        return response.data
    }
)

export const putSuccessAsync = createAppAsyncThunk(
    'parcel/putSuccessParcel',
    async (id: number) => {
        const response = await successParcelTrack(id)

        // The value we return becomes the `fulfilled` action payload
        return response.data
    }
)

export const putGoingAsync = createAppAsyncThunk(
    'parcel/goingSuccessParcel',
    async (id: number) => {
        const response = await goingParcelTrack(id)

        // The value we return becomes the `fulfilled` action payload
        return response.data
    }
)