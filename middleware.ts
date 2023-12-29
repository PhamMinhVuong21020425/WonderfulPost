import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'
import { Database } from '@/lib/database.type';

export async function middleware(req: NextRequest) {
    const requestUrl = new URL(req.url)

    const res = NextResponse.next()

    // Create a Supabase client configured to use cookies
    const supabase = createMiddlewareClient<Database>({ req, res })
    const { data: { user } } = await supabase.auth.getUser();

    // Refresh session if expired - required for Server Components
    const sessionObject = await supabase.auth.getSession()
    const session = sessionObject?.data.session
    // console.log({ user })

    if (!user && !session && requestUrl.pathname !== '/login' && requestUrl.pathname !== '/signup' && requestUrl.pathname !== '/') {
        return NextResponse.redirect(`${requestUrl.origin}/login`)
    }

    // if (user && session && (requestUrl.pathname === '/login' || requestUrl.pathname === '/signup')) {
    //     return NextResponse.redirect(`${requestUrl.origin}/`)
    // }

    if (user && session && requestUrl.pathname === '/') {
        if (user.id) {
            const { data: profile } = await supabase.from('profiles').select('*').eq('id', user.id).single();
            const position = profile?.position;
            switch (position) {
                case 'ADMIN':
                    return NextResponse.redirect(`${requestUrl.origin}/company_leader`)
                case 'LEADER GATHERING':
                    return NextResponse.redirect(`${requestUrl.origin}/leader_gathering_point`)
                case 'LEADER TRANSACTION':
                    return NextResponse.redirect(`${requestUrl.origin}/leader_transaction_point`)
                case 'STAFF GATHERING':
                    return NextResponse.redirect(`${requestUrl.origin}/staff_gathering_point`)
                case 'STAFF TRANSACTION':
                    return NextResponse.redirect(`${requestUrl.origin}/staff_transaction_point`)
                default:
                    return NextResponse.next()
            }

        }
    }

    return NextResponse.next()
}

// Ensure the middleware is only called for relevant paths.
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!_next/static|_next/image|favicon.ico|auth|api).*)',
    ],
}