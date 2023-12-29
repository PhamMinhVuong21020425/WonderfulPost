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

    const { data } = await supabase.from("parcels").select("*");
    return NextResponse.json(data);
}

export async function POST(req: Request, res: Response) {
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient<Database>({
        cookies: () => cookieStore,
    });

    const formData = await req.formData()
    const from_branch_id = String(formData.get("from_branch_id"));
    const height = Number(formData.get("height"));
    const length = Number(formData.get("length"));
    const price = Number(formData.get("price"));
    const recipient_address = String(formData.get("recipient_address"));
    const recipient_contact = String(formData.get("recipient_contact"));
    const recipient_name = String(formData.get("recipient_name"));
    const reference_number = String(formData.get("reference_number"));
    const sender_address = String(formData.get("sender_address"));
    const sender_contact = String(formData.get("sender_contact"));
    const sender_name = String(formData.get("sender_name"));
    const status = String(formData.get("status"));
    const to_branch_id = String(formData.get("to_branch_id"));
    const type = String(formData.get("type")) as "GOODS" | "DOCUMENTS" | null | undefined;
    const weight = Number(formData.get("weight"));
    const width = Number(formData.get("width"));

    const { error } = await supabase.from("parcels").insert({
        from_branch_id,
        height,
        length,
        price,
        recipient_address,
        recipient_contact,
        recipient_name,
        reference_number,
        sender_address,
        sender_contact,
        sender_name,
        status: "ON_PENDING",
        to_branch_id,
        type,
        weight,
        width,
    });

    return NextResponse.json(error);
}

// export async function PUT(req: Request, res: Response) {
//     const cookieStore = cookies();
//     const supabase = createRouteHandlerClient<Database>({
//         cookies: () => cookieStore,
//     });

//     await supabase.from("parcels").update([]).eq('id', '');

// }

// export async function DELETE(req: Request, res: Response) {
//     const cookieStore = cookies();
//     const supabase = createRouteHandlerClient<Database>({
//         cookies: () => cookieStore,
//     });

//     await supabase.from("parcels").delete().eq('id', 'someValue');
// }

