type Office = {
    id: string;
    name: string;
    address: string;
    phone: string;
    email: string;
    fax: string;
    sub_offices: Office[] | [];
}

export default Office;