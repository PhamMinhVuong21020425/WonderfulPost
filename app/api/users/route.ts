import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore);
    const { data: users } = await supabase.from("users").select();

    return NextResponse.json({ data: users })
}