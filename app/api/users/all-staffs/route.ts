import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { Database } from "@/lib/database.type";
import type Office from "@/app/types/OfficeType";

export const dynamic = "force-dynamic";

export async function GET(req: Request, res: Response) {
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient<Database>({
        cookies: () => cookieStore,
    });

    const { data: staffs } = await supabase
        .from("profiles")
        .select(`*, branches(*)`)
        .filter("position", "in", '("STAFF TRANSACTION","STAFF GATHERING")');

    const output = staffs?.map((staff) => {
        staff.office = { ...staff.branches, branches: [] } as Office;
        const { branches, ...result } = staff;
        return result;
    });

    return NextResponse.json(output);
}

export async function POST(request: Request) {
    const formData = await request.json();
    const name = String(formData?.full_name);
    const email = String(formData?.email);
    const password = "12345678";
    const phone = String(formData?.phone);
    const position = String(formData?.position) as
        | "ADMIN"
        | "LEADER GATHERING"
        | "LEADER TRANSACTION"
        | "STAFF TRANSACTION"
        | "STAFF GATHERING";
    const postalCode = String(formData?.branch_id);

    const supabaseAdmin = createClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY!
    );

    const { error } = await supabaseAdmin.auth.admin.createUser({
        email,
        password,
        email_confirm: false,
        phone_confirm: false,
        user_metadata: { full_name: name },
    });

    if (error) {
        return NextResponse.json({ data: { message: error } });
    }

    await supabaseAdmin
        .from("profiles")
        .update({ phone, position, branch_id: postalCode })
        .match({ email });
    const { data: staff } = await supabaseAdmin
        .from("profiles")
        .select(`*, branches(*)`)
        .match({ email })
        .single();

    if (staff && staff.branches) {
        staff.office = { ...staff.branches, branches: [] } as Office;
        const { branches, ...result } = staff;
        return NextResponse.json(result);
    }

    return NextResponse.json(null);
}

export async function PUT(request: Request) {
    const formData = await request.json();
    const id = String(formData?.id);
    const name = String(formData?.full_name);
    const email = String(formData?.email);
    const phone = String(formData?.phone);
    const position = String(formData?.position) as
        | "ADMIN"
        | "LEADER GATHERING"
        | "LEADER TRANSACTION"
        | "STAFF TRANSACTION"
        | "STAFF GATHERING";
    const postalCode = String(formData?.branch_id);

    const supabase = createClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY!
    );

    const { error } = await supabase.auth.admin.updateUserById(
        id,
        {
            email,
            email_confirm: false,
            phone_confirm: false,
            user_metadata: { full_name: name }
        }
    )

    await supabase
        .from("profiles")
        .update({ full_name: name, email, phone, position, branch_id: postalCode })
        .eq("id", id);

    const { data: staff } = await supabase
        .from("profiles")
        .select(`*, branches(*)`)
        .eq("id", id)
        .single();

    if (staff && staff.branches) {
        staff.office = { ...staff.branches, branches: [] } as Office;
        const { branches, ...result } = staff;
        return NextResponse.json(result);
    }

    return NextResponse.json(null);
}

export async function DELETE(request: Request) {
    const formData = await request.json();
    const id = String(formData?.id);

    const supabase = createClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY!
    );

    const { error } = await supabase.auth.admin.deleteUser(id)

    return NextResponse.json(id);
}
