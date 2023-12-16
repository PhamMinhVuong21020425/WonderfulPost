import Office from "./OfficeType";

type User = {
    id: string;
    name: string;
    office: Office;
    email: string;
    phone: string;
    role: "STAFF" | "LEADER" | "ADMIN";
    position: "TRANSACTION" | "GATHERING" | "ADMIN";
}

export default User;