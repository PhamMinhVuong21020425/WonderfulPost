type Office = {
    id: string;
    name: string | null;
    country: string;
    city: string;
    district: string | null;
    commune: string | null;
    address: string | null;
    phone: string | null;
    type: "TRANSACTION" | "GATHERING";
    reference_id: string | null;
    created_at: string | null;
    branches: Office[] | [];
}

export default Office;