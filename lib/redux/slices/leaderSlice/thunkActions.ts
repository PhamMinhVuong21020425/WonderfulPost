/* Instruments */
import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'
import type { ReduxThunkAction } from '@/lib/redux'
import { fetchAllLeaders, fetchSubOffices, addLeader, editLeader, deleteLeader } from './fetchLeader'

export const getAllLeadersInfoAsync = createAppAsyncThunk(
    'user/fetchLeader',
    async () => {
        const response = await fetchAllLeaders()

        // The value we return becomes the `fulfilled` action payload
        return response.data
    }
)

export const getSubOfficesInfoAsync = createAppAsyncThunk(
    'user/fetchSubOffices',
    async (id: string) => {
        const response = await fetchSubOffices(id)

        // The value we return becomes the `fulfilled` action payload
        return response.data
    }
)

export const addLeaderAsync = createAppAsyncThunk(
    'user/addLeader',
    async (formData: object) => {
        const response = await addLeader(formData)

        // The value we return becomes the `fulfilled` action payload
        return response.data
    }
)

export const editLeaderAsync = createAppAsyncThunk(
    'user/editLeader',
    async (formData: object) => {
        const response = await editLeader(formData)

        // The value we return becomes the `fulfilled` action payload
        return response.data
    }
)

export const deleteLeaderAsync = createAppAsyncThunk(
    'user/deleteLeader',
    async (id: string) => {
        const response = await deleteLeader(id)

        // The value we return becomes the `fulfilled` action payload
        return response.data
    }
)