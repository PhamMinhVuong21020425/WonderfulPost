interface Staff {
    id: string;
    name: string;
    office: string;
    email: string;
    phone: string;
    position: "TRANSACTION" | "GATHERING",
    status: "ACTIVE" | "INACTIVE";
}

export default Staff;