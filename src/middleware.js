import { NextResponse } from 'next/server';

export function middleware(req) {
    const token = req.cookies.get('token'); 
    const protectedRoutes = ['/admin', '/user']; 

    if (protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route))) {
        if (!token) {
            return NextResponse.redirect(new URL('/login', req.url)); 
        }
    }

    return NextResponse.next(); 
}

export const config = {
    matcher: ['/admin/:path*', '/user/:path*'], 
};
