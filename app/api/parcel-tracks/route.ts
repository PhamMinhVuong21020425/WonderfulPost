import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { Database } from "@/lib/database.type";

export const dynamic = "force-dynamic";

export async function GET(req: Request, res: Response) {
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient<Database>({
        cookies: () => cookieStore,
    });

    const { data } = await supabase.from("parcel_tracks").select("*");
    return NextResponse.json(data);
}

export async function POST(req: Request, res: Response) {
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient<Database>({
        cookies: () => cookieStore,
    });

    const formData = await req.formData()
    const parcel_id = Number(formData.get("parcel_id"));
    const from = String(formData.get("from"));
    const to = String(formData.get("to"));

    const { error } = await supabase.from("parcel_tracks").insert({
        parcel_id,
        from,
        to,
        status: "ON PENDING",
    });

    return NextResponse.json(error);
}