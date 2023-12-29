/* Instruments */
import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'
import type { ReduxThunkAction } from '@/lib/redux'
import { fetchAllStaffs, fetchSubOffices, addStaff, editStaff, deleteStaff } from './fetchStaff'

export const getAllStaffsInfoAsync = createAppAsyncThunk(
    'user/fetchStaff',
    async () => {
        const response = await fetchAllStaffs()

        // The value we return becomes the `fulfilled` action payload
        return response.data
    }
)

export const getSubOfficesStaffAsync = createAppAsyncThunk(
    'user/fetchSubOffices',
    async (id: string) => {
        const response = await fetchSubOffices(id)

        // The value we return becomes the `fulfilled` action payload
        return response.data
    }
)

export const addStaffAsync = createAppAsyncThunk(
    'user/addStaff',
    async (formData: object) => {
        const response = await addStaff(formData)

        // The value we return becomes the `fulfilled` action payload
        return response.data
    }
)

export const editStaffAsync = createAppAsyncThunk(
    'user/editStaff',
    async (formData: object) => {
        const response = await editStaff(formData)

        // The value we return becomes the `fulfilled` action payload
        return response.data
    }
)

export const deleteStaffAsync = createAppAsyncThunk(
    'user/deleteStaff',
    async (id: string) => {
        const response = await deleteStaff(id)

        // The value we return becomes the `fulfilled` action payload
        return response.data
    }
)