import Office from "./OfficeType";

type User = {
  id: string;
  email: string;
  office?: Office | null;
  full_name: string | null;
  position:
    | "ADMIN"
    | "LEADER GATHERING"
    | "LEADER TRANSACTION"
    | "STAFF GATHERING"
    | "STAFF TRANSACTION"
    | "CUSTOMER";
  phone: string | null;
  avatar_url: string | null;
  branch_id: string | null;
  website: string | null;
  created_at: string | null;
  updated_at: string | null;
};

export default User;
