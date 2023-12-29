import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { Database } from "@/lib/database.type";

export const dynamic = "force-dynamic";

export async function PUT(req: Request, { params }: { params: { id: number } }) {
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient<Database>({
        cookies: () => cookieStore,
    });
    const { data } = await supabase
        .from("parcel_tracks")
        .update({
            status: 'SUCCESS'
        })
        .eq('id', params.id);
    return NextResponse.json(data);
}