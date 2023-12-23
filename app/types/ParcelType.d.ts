type Parcel = {
    id: string;
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
}

export default Parcel;