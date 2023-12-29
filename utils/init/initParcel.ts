import type Parcel from "@/app/types/ParcelType";

const initParcel: Parcel = {
    id: 1,
    name: "",
    status: "ON_PENDING",
    created_at: null,
    description: null,
    from_branch_id: "",
    height: null,
    length: null,
    price: 0,
    recipient_address: "",
    recipient_contact: "",
    recipient_name: "",
    reference_number: "",
    sender_address: "",
    sender_contact: "",
    sender_name: "",
    to_branch_id: "",
    type: "GOODS",
    weight: null,
    width: null,
}

export default initParcel;