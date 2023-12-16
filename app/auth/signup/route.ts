import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

import { Database } from '@/lib/database.type'

export async function POST(request: Request) {
    const requestUrl = new URL(request.url)
    const formData = await request.formData()
    const name = String(formData.get('name'))
    const email = String(formData.get('email'))
    const password = String(formData.get('password'))
    const confirm = String(formData.get('confirm'))

    if (password !== confirm) {
        return NextResponse.redirect(`${requestUrl.origin}/signup`, {
            status: 301,
        })
    }

    const cookieStore = cookies()
    const supabase = createRouteHandlerClient<Database>({ cookies: () => cookieStore })

    const { data } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                full_name: name,
            },
            emailRedirectTo: `${requestUrl.origin}/auth/callback`,
        },
    })
    
    // return NextResponse.json({ data })
    
    return NextResponse.redirect(requestUrl.origin, {
        status: 301,
    })
}