/* Core */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type User from '@/app/types/UserType'

/* Instruments */
import { getUserInfoAsync } from './thunkActions'

const initialState: UserSliceState = {
    value: {} as User,
    status: 'idle',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        
    },
    // The `extraReducers` field lets the slice handle actions defined elsewhere,
    // including actions generated by createAsyncThunk or in other slices.
    extraReducers: (builder) => {
        builder
            .addCase(getUserInfoAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getUserInfoAsync.fulfilled, (state, action: PayloadAction<User>) => {
                state.status = 'idle'
                state.value = action.payload
            })
    },
})

/* Types */
export interface UserSliceState {
    value: User
    status: 'idle' | 'loading' | 'failed'
}
