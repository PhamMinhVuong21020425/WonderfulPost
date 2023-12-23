type Parcel = {
    id: number;
    name: string | null
    length: number;
    price: number;
    height: number;
    weight: number;
    width: number;
    status: "ON_PENDING" | "ON_GOING" | "SUCCESS" | "CANCEL";
    recipient_address: string;
    recipient_contact: string;
    recipient_name: string;
    sender_address: string;
    sender_contact: string;
    sender_name: string;
    type: string | null;
    date_created: string | null;
    description: string | null;
    from_branch_id: string;
    to_branch_id: string;

}

export default Parcel;