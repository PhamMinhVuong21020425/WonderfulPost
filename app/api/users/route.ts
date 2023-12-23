import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { Database } from '@/lib/database.type';

export const dynamic = "force-dynamic";

export async function GET() {
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient<Database>({ cookies: () => cookieStore } )

    const { data } = await supabase.from('profiles').select('*');

    return NextResponse.json(data)
}