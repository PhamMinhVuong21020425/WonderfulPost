import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { Database } from '@/lib/database.type'

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
    const requestUrl = new URL(request.url)
    const formData = await request.formData()
    const email = String(formData.get('email'))
    const password = String(formData.get('password'))
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient<Database>({ cookies: () => cookieStore })

    const { data } = await supabase.auth.signInWithPassword({
        email,
        password,
    })

    // return NextResponse.json({ data })

    return NextResponse.redirect(requestUrl.origin, {
        status: 301,
    })
}