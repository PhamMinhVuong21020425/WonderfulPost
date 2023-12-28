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

    const { data: track } = await supabase
        .from("parcel_tracks")
        .select(`*`)
        .eq('parcel_id', params.id)
        .order('updated_at', { ascending: false })
        .limit(1)
        .single();

    const { data: cur } = await supabase
        .from("parcels")
        .select(`*`)
        .eq('id', params.id)
        .single();

    let current_branch_id = cur?.to_branch_id;
    if (cur?.to_branch_id != track?.to) {
        current_branch_id = track?.from || ""
    } else if (track?.status != "SUCCESS" && track?.status != "CANCEL") {
        current_branch_id = track?.from || ""
    }

    const { data } = await supabase
        .from("branches")
        .select(`*`)
        .eq('id', current_branch_id || "abcd")
        .single();
    return NextResponse.json(data);
}