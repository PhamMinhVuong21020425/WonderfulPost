import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { Database } from "@/lib/database.type";
import User from "@/app/types/UserType";

export const dynamic = "force-dynamic";

export async function GET(req: Request, { params }: { params: { id: string } }) {
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient<Database>({
        cookies: () => cookieStore,
    });

    const { data } = await supabase.from("parcels").select("*");

    return NextResponse.json(data);
}

export async function POST(req: Request, res: Response) {
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient<Database>({
        cookies: () => cookieStore,
    });

    const { error } = await supabase.from("parcels").insert({
        from_branch_id: "116000",
        height: 10,
        length: 25,
        price: 50000,
        recipient_address: "Jl. Raya Ciputat No. 1",
        recipient_contact: "081234567890",
        recipient_name: "John Doe",
        reference_number: "1234567890",
        sender_address: "Jl. Raya Ciputat No. 1",
        sender_contact: "081234567890",
        sender_name: "John Doe",
        status: "ON PENDING",
        to_branch_id: "116700",
        type: "PICKUP",
        weight: 14,
        width: 40,
    });

    return NextResponse.json(error);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient<Database>({
        cookies: () => cookieStore,
    });

    const { error } = await supabase.from("parcels").update({ name: "Ball" }).eq('id', params.id);

    return NextResponse.json(error);
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient<Database>({
        cookies: () => cookieStore,
    });

    const { error } = await supabase.from("parcels").delete().eq('id', params.id);

    return NextResponse.json(error);
}

