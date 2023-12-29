import Parcel from "./ParcelType";
import Office from "./OfficeType";

type ParcelTrack = {
    created_at?: string | null
    from: string | null
    id: number
    parcel_id: number
    status: "ON_PENDING" | "ON_GOING" | "SUCCESS" | "CANCEL"
    to?: string | null
    updated_at?: string | null
    from_branch?: Office
    to_branch?: Office
    parcel?: Parcel
}

export default ParcelTrack;