import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { createClient } from '@supabase/supabase-js';
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

  const { data: leaders } = await supabase
    .from("profiles")
    .select(`*, branches(*)`)
    .filter("position", "in", '("LEADER TRANSACTION","LEADER GATHERING")');

  const output = leaders?.map((leader) => {
    leader.office = { ...leader.branches, branches: [] } as Office;
    const { branches, ...result } = leader;
    return result;
  });

  return NextResponse.json(output);
}

export async function POST(request: Request) {
  const formData = await request.json()
  console.log(formData)
  const name = String(formData?.full_name)
  const email = String(formData?.email)
  const password = '12345678'
  const phone = String(formData?.phone)
  const position = String(formData?.position) as "ADMIN" | "LEADER GATHERING" | "LEADER TRANSACTION" | "STAFF TRANSACTION" | "STAFF GATHERING"
  const postalCode = String(formData?.branch_id)

  const supabaseAdmin = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY!,
  );

  const { error } = await supabaseAdmin.auth.admin.createUser({
    email,
    password,
    email_confirm: false,
    phone_confirm: false,
    user_metadata: { full_name: name }
  })

  if (error) {
    return NextResponse.json({ data: { message: error } })
  }

  await supabaseAdmin.from('profiles').update({ phone, position, branch_id: postalCode }).match({ email });
  const { data: leader } = await supabaseAdmin.from('profiles').select(`*, branches(*)`).match({ email }).single();

  if (leader && leader.branches) {
    leader.office = { ...leader.branches, branches: [] } as Office;
    const { branches, ...result } = leader;
    return NextResponse.json(result);
  }

  return NextResponse.json(null);
}