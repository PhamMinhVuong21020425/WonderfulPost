export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export type Database = {
    public: {
        Tables: {
            branches: {
                Row: {
                    city: string
                    contact: string
                    country: string
                    date_created: string | null
                    id: number
                    reference: number | null
                    street: string
                    type: string | null
                    zip_code: string
                }
                Insert: {
                    city: string
                    contact: string
                    country: string
                    date_created?: string | null
                    id?: number
                    reference?: number | null
                    street: string
                    type?: string | null
                    zip_code: string
                }
                Update: {
                    city?: string
                    contact?: string
                    country?: string
                    date_created?: string | null
                    id?: number
                    reference?: number | null
                    street?: string
                    type?: string | null
                    zip_code?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "branches_reference_fkey"
                        columns: ["reference"]
                        isOneToOne: false
                        referencedRelation: "branches"
                        referencedColumns: ["id"]
                    }
                ]
            }
            parcel_tracks: {
                Row: {
                    date_created: string | null
                    from: number | null
                    id: number
                    parcel_id: number
                    status: number
                    to: number | null
                }
                Insert: {
                    date_created?: string | null
                    from?: number | null
                    id?: number
                    parcel_id: number
                    status: number
                    to?: number | null
                }
                Update: {
                    date_created?: string | null
                    from?: number | null
                    id?: number
                    parcel_id?: number
                    status?: number
                    to?: number | null
                }
                Relationships: [
                    {
                        foreignKeyName: "parcel_tracks_parcel_id_fkey"
                        columns: ["parcel_id"]
                        isOneToOne: false
                        referencedRelation: "parcels"
                        referencedColumns: ["id"]
                    }
                ]
            }
            parcels: {
                Row: {
                    date_created: string | null
                    from_branch_id: number
                    height: string
                    id: number
                    length: string
                    price: number
                    recipient_address: string
                    recipient_contact: string
                    recipient_name: string
                    reference_number: string
                    sender_address: string
                    sender_contact: string
                    sender_name: string
                    status: number
                    to_branch_id: number
                    type: number
                    weight: string
                    width: string
                }
                Insert: {
                    date_created?: string | null
                    from_branch_id: number
                    height: string
                    id?: number
                    length: string
                    price: number
                    recipient_address: string
                    recipient_contact: string
                    recipient_name: string
                    reference_number: string
                    sender_address: string
                    sender_contact: string
                    sender_name: string
                    status?: number
                    to_branch_id: number
                    type: number
                    weight: string
                    width: string
                }
                Update: {
                    date_created?: string | null
                    from_branch_id?: number
                    height?: string
                    id?: number
                    length?: string
                    price?: number
                    recipient_address?: string
                    recipient_contact?: string
                    recipient_name?: string
                    reference_number?: string
                    sender_address?: string
                    sender_contact?: string
                    sender_name?: string
                    status?: number
                    to_branch_id?: number
                    type?: number
                    weight?: string
                    width?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "parcels_from_branch_id_fkey"
                        columns: ["from_branch_id"]
                        isOneToOne: false
                        referencedRelation: "branches"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "parcels_to_branch_id_fkey"
                        columns: ["to_branch_id"]
                        isOneToOne: false
                        referencedRelation: "branches"
                        referencedColumns: ["id"]
                    }
                ]
            }
            system_settings: {
                Row: {
                    address: string
                    contact: string
                    cover_img: string
                    email: string
                    id: number
                    name: string
                }
                Insert: {
                    address: string
                    contact: string
                    cover_img: string
                    email: string
                    id?: number
                    name: string
                }
                Update: {
                    address?: string
                    contact?: string
                    cover_img?: string
                    email?: string
                    id?: number
                    name?: string
                }
                Relationships: []
            }
            users: {
                Row: {
                    branch_id: number
                    date_created: string | null
                    email: string
                    firstname: string
                    id: number
                    lastname: string
                    password: string
                    position: string
                    role: number
                }
                Insert: {
                    branch_id: number
                    date_created?: string | null
                    email: string
                    firstname: string
                    id?: number
                    lastname: string
                    password: string
                    position?: string
                    role: number
                }
                Update: {
                    branch_id?: number
                    date_created?: string | null
                    email?: string
                    firstname?: string
                    id?: number
                    lastname?: string
                    password?: string
                    position?: string
                    role?: number
                }
                Relationships: [
                    {
                        foreignKeyName: "users_branch_id_fkey"
                        columns: ["branch_id"]
                        isOneToOne: false
                        referencedRelation: "branches"
                        referencedColumns: ["id"]
                    }
                ]
            }
        }
        Views: {
            [_ in never]: never
        }
        Functions: {
            [_ in never]: never
        }
        Enums: {
            [_ in never]: never
        }
        CompositeTypes: {
            [_ in never]: never
        }
    }
}

export type Tables<
    PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
            Row: infer R
        }
    ? R
    : never
    : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
        Database["public"]["Views"])
    ? (Database["public"]["Tables"] &
        Database["public"]["Views"])[PublicTableNameOrOptions] extends {
            Row: infer R
        }
    ? R
    : never
    : never

export type TablesInsert<
    PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
        Insert: infer I
    }
    ? I
    : never
    : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
    ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
    }
    ? I
    : never
    : never

export type TablesUpdate<
    PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
        Update: infer U
    }
    ? U
    : never
    : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
    ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
    }
    ? U
    : never
    : never

export type Enums<
    PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
    EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
    ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
    : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
    ? Database["public"]["Enums"][PublicEnumNameOrOptions]
    : never
