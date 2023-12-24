import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { Database } from '@/lib/database.type';

export const dynamic = "force-dynamic";

export async function GET(req: Request, res: Response) {
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient<Database>({ cookies: () => cookieStore } )

    const { data: { user } } = await supabase.auth.getUser();

    const id = user?.id as string;

    const { data: profile } = await supabase.from('profiles').select('*').eq('id', id).single();

    return NextResponse.json(profile);
}

export async function POST(req: Request, res: Response) {
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient<Database>({ cookies: () => cookieStore })

    const formData = await req.formData()
    const name = String(formData.get('name'))
    const email = String(formData.get('email'))

    const { error } = await supabase.from('profiles').insert({
        full_name: name,
        position: "ADMIN",
        email: email,
    });

    return NextResponse.json(error);
}
