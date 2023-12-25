/* Instruments */
import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'
import type { ReduxThunkAction } from '@/lib/redux'
import { fetchAllLeaders, fetchSubOffices } from './fetchLeader'
import { selectLeader } from './selectors'

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