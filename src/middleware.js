import { NextResponse } from 'next/server';
import { useSelector } from 'react-redux'; // Assuming you are using Redux to store the user state

export function middleware(req) {

  const user = useSelector((state) => state.auth.user); // Get user from Redux state

    const token = req.cookies.get('token'); 
    const protectedRoutes = ['/app', '/admin'];

    if (protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route))) {
        if (!user) {
            return NextResponse.redirect(new URL('/login', req.url)); // Redirect to login
        }
    }

    return NextResponse.next(); // Allow access if authenticated
}

// Apply middleware only to protected routes
export const config = {
    matcher: ['/app/:path*', '/dashboard:path', '/admin/:path*'], // Protect these paths
};
