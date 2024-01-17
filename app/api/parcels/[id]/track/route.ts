import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { Database } from "@/lib/database.type";

export const dynamic = "force-dynamic";

export async function GET(req: Request, { params }: { params: { id: number } }) {
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient<Database>({
        cookies: () => cookieStore,
    });

    const { data } = await supabase
        .from("parcels")
        .select(`id, from_branch:from_branch_id(id, name, address, city, reference:reference_id(id,name,address,city)), to_branch:to_branch_id(id, name, address, city, reference:reference_id(id,name,address,city))`)
        .eq('id', params.id)
        .single();

    return NextResponse.json(data);
}