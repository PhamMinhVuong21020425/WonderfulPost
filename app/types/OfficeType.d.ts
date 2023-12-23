type Office = {
    id: string;
    name: string;
    country: string;
    city: string | null;
    district: string | null;
    commune: string | null;
    address: string | null;
    phone: string | null;
    email: string;
    fax: string;
    sub_offices: Office[] | [];
}

export default Office;