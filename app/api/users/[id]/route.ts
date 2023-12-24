import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { Database } from '@/lib/database.type';

export const dynamic = "force-dynamic";

export async function PUT(req: Request, { params }: { params: { id: string } }) {
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient<Database>({ cookies: () => cookieStore })

    const { error } = await supabase.from('profiles').update({}).eq('id', params.id);

    return NextResponse.json(error);
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient<Database>({ cookies: () => cookieStore })

    const { error } = await supabase.from('profiles').delete().eq('id', params.id);

    return NextResponse.json(error);
}

