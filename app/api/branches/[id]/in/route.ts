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
        .select(`parcel:parcel_id(*)`)
        .eq("to", params.id)
    // .order("created_at", { ascending: true })

    const newData = data?.map((item) => item.parcel)
    return NextResponse.json(newData)
}