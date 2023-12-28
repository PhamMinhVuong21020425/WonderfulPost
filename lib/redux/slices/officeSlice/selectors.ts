/* Instruments */
import type { ReduxState } from '@/lib/redux'
export const selectOffice = (state: ReduxState) => state.office.value
