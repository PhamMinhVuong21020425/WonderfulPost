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

    const { data } = await supabase
        .from("parcels")
        .select("*")
        .order("updated_at", { ascending: false });
    return NextResponse.json(data);
}

export async function POST(req: Request, res: Response) {
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient<Database>({
        cookies: () => cookieStore,
    });

    const formData = await req.json();
    const { id, ...rest } = formData;
    const parcelInsert = {
        ...rest,
        length: Number(rest.length),
        width: Number(rest.width),
        height: Number(rest.height),
        weight: Number(rest.weight),
        price: Number(rest.price),
    };

    const { data: newParcel, error } = await supabase
        .from("parcels")
        .insert([{ ...parcelInsert }])
        .select()
        .single();

    if (error) console.log(error);

    if (newParcel) {
        const { data: track } = await supabase
            .from("parcel_tracks")
            .insert({
                parcel_id: newParcel.id,
                from: newParcel.from_branch_id,
                to: newParcel.to_branch_id,
                status: "ON_PENDING",
            })
            .select()
            .single();
        const result = {
            ...track,
            parcel: newParcel,
        }

        return NextResponse.json(result);
    }

    return NextResponse.json(null);
}

export async function PUT(req: Request, res: Response) {
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient<Database>({
        cookies: () => cookieStore,
    });

    const formData = await req.json();
    const { id, ...rest } = formData;
    const parcelInsert = {
        ...rest,
        length: Number(rest.length),
        width: Number(rest.width),
        height: Number(rest.height),
        weight: Number(rest.weight),
        price: Number(rest.price),
    };

    const { data: newParcel, error } = await supabase
        .from("parcels")
        .update([{ ...parcelInsert }])
        .eq("id", id)
        .select()
        .single();

    if (error) console.log(error);

    return NextResponse.json(newParcel);
}

export async function DELETE(req: Request, res: Response) {
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient<Database>({
        cookies: () => cookieStore,
    });

    const formData = await req.json();
    const id = String(formData?.id);

    await supabase.from("parcels").delete().eq("id", id);

    return NextResponse.json(id);
}
