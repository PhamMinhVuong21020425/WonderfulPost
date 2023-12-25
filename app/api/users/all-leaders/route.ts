import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
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
