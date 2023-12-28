/* Instruments */
import { counterSlice, userSlice, leaderSlice, staffSlice, officeSlice, parcelSlice } from './slices'

export const reducer = {
  counter: counterSlice.reducer,
  user: userSlice.reducer,
  leader: leaderSlice.reducer,
  staff: staffSlice.reducer,
  office: officeSlice.reducer,
  parcel: parcelSlice.reducer,
}
