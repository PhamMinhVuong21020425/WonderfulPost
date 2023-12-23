import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { Database } from '@/lib/database.type'

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
    const requestUrl = new URL(request.url)
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient<Database>({ cookies: () => cookieStore })

    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: `${requestUrl.origin}/auth/callback`,
        },
    })

    if (error) {
        return NextResponse.json({ error })
    }

    const redirectUrl = data.url ? data.url : process.env.CALLBACK_URL

    return NextResponse.redirect(redirectUrl!, {
        status: 301,
    })
}