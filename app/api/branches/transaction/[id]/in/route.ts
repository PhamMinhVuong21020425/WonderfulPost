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

    const { data: first } = await supabase
        .from("parcel_tracks")
        .select(`*, from_branch:from(*), to_branch:to(*), parcel:parcel_id(*)`)
        .eq("from", params.id)
        .eq("status", "ON_PENDING");

    const { data: last } = await supabase
        .from("parcel_tracks")
        .select(`*, from_branch:from(*), to_branch:to(*), parcel:parcel_id(*)`)
        .eq("to", params.id)
        .eq("status", "SUCCESS");

    const data = [first, last];
    return NextResponse.json(data);
}