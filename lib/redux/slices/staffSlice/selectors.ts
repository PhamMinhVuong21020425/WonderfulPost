/* Instruments */
import type { ReduxState } from '@/lib/redux'
export const selectStaff = (state: ReduxState) => state.staff.value
