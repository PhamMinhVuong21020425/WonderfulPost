import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { Database } from "@/lib/database.type";
import User from "@/app/types/UserType";

export const dynamic = "force-dynamic";

export async function GET(req: Request, { params }: { params: { id: number } }) {
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient<Database>({
        cookies: () => cookieStore,
    });

    const { data } = await supabase
        .from("parcels")
        .select("*")
        .eq('id', params.id);
    return NextResponse.json(data);
}


export async function PUT(req: Request, { params }: { params: { id: number } }) {
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient<Database>({
        cookies: () => cookieStore,
    });

    const formData = await req.formData();
    const status = String(formData.get("status")) as "ON_PENDING" | "ON_GOING" | "SUCCESS" | "CANCEL" | null;

    const { error } = await supabase
        .from("parcels")
        .update({
            status,
        })
        .eq('id', params.id);

    return NextResponse.json(error);
}

export async function DELETE(req: Request, { params }: { params: { id: number } }) {
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient<Database>({
        cookies: () => cookieStore,
    });

    const { error } = await supabase.from("parcels").delete().eq('id', params.id);

    return NextResponse.json(error);
}

