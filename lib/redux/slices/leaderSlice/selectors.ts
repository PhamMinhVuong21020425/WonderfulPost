/* Instruments */
import type { ReduxState } from '@/lib/redux'
export const selectLeader = (state: ReduxState) => state.leader.value
