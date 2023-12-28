import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { Database } from "@/lib/database.type";

export const dynamic = "force-dynamic";

export async function GET(req: Request, { params }: { params: { id: string } }) {
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient<Database>({
        cookies: () => cookieStore,
    });

    const { data } = await supabase
        .from("parcel_tracks")
        .select("*")
        .eq('parcel_id', params.id)
        .order('updated_at', { ascending: false })
        .limit(1)
        .single();
    return NextResponse.json(data);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient<Database>({
        cookies: () => cookieStore,
    });

    const formData = await req.formData();
    const status = String(formData.get("status")) as "ON PENDING" | "ON GOING" | "SUCCESS" | "CANCEL" | null;

    const { data: cur } = await supabase
        .from("parcel_tracks")
        .select("*")
        .eq('parcel_id', params.id)
        .order('updated_at', { ascending: false })
        .limit(1)
        .single();
    if (!cur) return NextResponse.json({ error: "Parcel not found" });
    else {
        const { data } = await supabase
            .from("parcel_tracks")
            .update({
                status,
            })
            .eq('id', cur.id);
        return NextResponse.json(data);
    }
}

