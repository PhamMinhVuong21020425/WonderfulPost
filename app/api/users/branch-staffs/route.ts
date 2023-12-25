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

    const {
        data: { user },
    } = await supabase.auth.getUser();

    const id = user?.id as string;

    const { data: branch_id } = await supabase
        .from("profiles")
        .select(`branch_id`)
        .eq("id", id)
        .single();
    const { data } = await supabase
        .from("profiles")
        .select(`*, branches(*)`)
        .eq("branch_id", branch_id?.branch_id || "abcxyz")
        .filter("position", "in", '("STAFF TRANSACTION","STAFF GATHERING")');

    return NextResponse.json(data);
}