export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface Database {
    public: {
        Tables: {
            branches: {
                Row: {
                    city: string
                    commune: string | null
                    contact: string
                    country: string
                    date_created: string | null
                    district: string | null
                    id: string
                    name: string | null
                    reference_id: string | null
                    street: string
                    type: Database["public"]["Enums"]["branches_type"] | null
                }
                Insert: {
                    city: string
                    commune?: string | null
                    contact: string
                    country?: string
                    date_created?: string | null
                    district?: string | null
                    id: string
                    name?: string | null
                    reference_id?: string | null
                    street: string
                    type?: Database["public"]["Enums"]["branches_type"] | null
                }
                Update: {
                    city?: string
                    commune?: string | null
                    contact?: string
                    country?: string
                    date_created?: string | null
                    district?: string | null
                    id?: string
                    name?: string | null
                    reference_id?: string | null
                    street?: string
                    type?: Database["public"]["Enums"]["branches_type"] | null
                }
                Relationships: [
                    {
                        foreignKeyName: "branches_reference_id_fkey"
                        columns: ["reference_id"]
                        isOneToOne: false
                        referencedRelation: "branches"
                        referencedColumns: ["id"]
                    }
                ]
            }
            parcel_tracks: {
                Row: {
                    date_created: string | null
                    from: string | null
                    id: number
                    parcel_id: number
                    status: Database["public"]["Enums"]["status"] | null
                    to: string | null
                    updated_time: string | null
                }
                Insert: {
                    date_created?: string | null
                    from?: string | null
                    id?: number
                    parcel_id: number
                    status?: Database["public"]["Enums"]["status"] | null
                    to?: string | null
                    updated_time?: string | null
                }
                Update: {
                    date_created?: string | null
                    from?: string | null
                    id?: number
                    parcel_id?: number
                    status?: Database["public"]["Enums"]["status"] | null
                    to?: string | null
                    updated_time?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "parcel_tracks_from_fkey"
                        columns: ["from"]
                        isOneToOne: false
                        referencedRelation: "branches"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "parcel_tracks_parcel_id_fkey"
                        columns: ["parcel_id"]
                        isOneToOne: false
                        referencedRelation: "parcels"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "parcel_tracks_to_fkey"
                        columns: ["to"]
                        isOneToOne: false
                        referencedRelation: "branches"
                        referencedColumns: ["id"]
                    }
                ]
            }
            parcels: {
                Row: {
                    date_created: string | null
                    description: string | null
                    from_branch_id: string
                    height: string
                    id: number
                    length: string
                    name: string | null
                    price: number
                    recipient_address: string
                    recipient_contact: string
                    recipient_name: string
                    reference_number: string
                    sender_address: string
                    sender_contact: string
                    sender_name: string
                    status: Database["public"]["Enums"]["status"] | null
                    to_branch_id: string
                    type: string | null
                    weight: string
                    width: string
                }
                Insert: {
                    date_created?: string | null
                    description?: string | null
                    from_branch_id: string
                    height: string
                    id?: number
                    length: string
                    name?: string | null
                    price: number
                    recipient_address: string
                    recipient_contact: string
                    recipient_name: string
                    reference_number: string
                    sender_address: string
                    sender_contact: string
                    sender_name: string
                    status?: Database["public"]["Enums"]["status"] | null
                    to_branch_id: string
                    type?: string | null
                    weight: string
                    width: string
                }
                Update: {
                    date_created?: string | null
                    description?: string | null
                    from_branch_id?: string
                    height?: string
                    id?: number
                    length?: string
                    name?: string | null
                    price?: number
                    recipient_address?: string
                    recipient_contact?: string
                    recipient_name?: string
                    reference_number?: string
                    sender_address?: string
                    sender_contact?: string
                    sender_name?: string
                    status?: Database["public"]["Enums"]["status"] | null
                    to_branch_id?: string
                    type?: string | null
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
                    branch_id: string
                    date_created: string | null
                    email: string
                    firstname: string
                    id: number
                    lastname: string
                    password: string
                    phone: string | null
                    position: Database["public"]["Enums"]["branches_type"] | null
                    role: Database["public"]["Enums"]["role"] | null
                }
                Insert: {
                    branch_id: string
                    date_created?: string | null
                    email: string
                    firstname: string
                    id: number
                    lastname: string
                    password: string
                    phone?: string | null
                    position?: Database["public"]["Enums"]["branches_type"] | null
                    role?: Database["public"]["Enums"]["role"] | null
                }
                Update: {
                    branch_id?: string
                    date_created?: string | null
                    email?: string
                    firstname?: string
                    id?: number
                    lastname?: string
                    password?: string
                    phone?: string | null
                    position?: Database["public"]["Enums"]["branches_type"] | null
                    role?: Database["public"]["Enums"]["role"] | null
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
            branches_type: "GATHERING" | "TRANSACTION"
            role: "STAFF" | "LEADER" | "ADMIN"
            status: "ON PENDING" | "ON GOING" | "SUCCESS" | "CANCEL"
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
