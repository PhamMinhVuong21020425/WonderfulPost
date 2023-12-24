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

    const { data } = await supabase.from("branches").select("*");
    return NextResponse.json(data);
}

export async function POST(req: Request, res: Response) {
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient<Database>({
        cookies: () => cookieStore,
    });

    return NextResponse.json({});
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient<Database>({
        cookies: () => cookieStore,
    });

    const { error } = await supabase.from("branches").update({}).eq('id', params.id);

    return NextResponse.json(error);
}

