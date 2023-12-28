import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { Database } from "@/lib/database.type";
import Office from '@/app/types/OfficeType';

export const dynamic = "force-dynamic";

export async function GET(req: Request, res: Response) {
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient<Database>({
        cookies: () => cookieStore,
    });

    let offset = 0;

    const pageSize = 1000;

    let allRecords: Office[] = [];

    while (true) {
        const { data } = await supabase
            .from("branches")
            .select(`*, branches(*)`)
            .range(offset, offset + pageSize - 1);

        if (data) {
            const offices = data as Office[] | [];
            allRecords.push(...offices);
            if (offices.length < pageSize) {
                break;
            }
        }

        offset += pageSize;
    }

    return NextResponse.json(allRecords);
}