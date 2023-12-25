type Parcel = {
    id: number;
    name: string | null;
    status: "ON_PENDING" | "ON_GOING" | "SUCCESS" | "CANCEL";
    created_at: string | null;
    description: string | null;
    from_branch_id: string;
    height: number | null;
    length: number | null;
    price: number;
    recipient_address: string;
    recipient_contact: string;
    recipient_name: string;
    reference_number: string;
    sender_address: string;
    sender_contact: string;
    sender_name: string;
    to_branch_id: string;
    type: "DELIVER" | "PICKUP";
    weight: number | null;
    width: number | null;
}

export default Parcel;