/* Core */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type User from '@/app/types/UserType'

/* Instruments */
import { getAllStaffsInfoAsync } from './thunkActions'

const initialState: StaffSliceState = {
    value: [] as User[],
    status: 'idle',
}

export const staffSlice = createSlice({
    name: 'staff',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        
    },
    // The `extraReducers` field lets the slice handle actions defined elsewhere,
    // including actions generated by createAsyncThunk or in other slices.
    extraReducers: (builder) => {
        builder
            .addCase(getAllStaffsInfoAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getAllStaffsInfoAsync.fulfilled, (state, action: PayloadAction<User[]>) => {
                state.status = 'idle'
                state.value = action.payload
            })
    },
})

/* Types */
export interface StaffSliceState {
    value: User[]
    status: 'idle' | 'loading' | 'failed'
}
