/* Instruments */
import type { ReduxState } from '@/lib/redux'
export const selectParcel = (state: ReduxState) => state.parcel.value
