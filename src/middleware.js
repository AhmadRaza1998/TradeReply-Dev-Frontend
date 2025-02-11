import { NextResponse } from 'next/server';

export function middleware(req) {
    const token = req.cookies.get('authToken'); 
    const protectedRoutes = ['/user']; 
    const authRoutes = ['/login' , '/register' , '/forgot-password' , '/verify-email' , '/home']

    if (protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route))) {
        if (!token) {
            return NextResponse.redirect(new URL('/login', req.url)); 
        }
    }
    if (authRoutes.some((route) => req.nextUrl.pathname.startsWith(route))) {
        if (token) {
            return NextResponse.redirect(new URL('/user/dashboard', req.url)); 
        }
    }

    return NextResponse.next(); 
}

export const config = {
    matcher: ['/admin/:path*', '/user/:path*' , '/:path*'], 
};
