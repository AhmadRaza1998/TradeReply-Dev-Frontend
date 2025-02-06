import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("authToken")?.value; 
  const isDashboard = req.nextUrl.pathname === "/"; 

  if (!token && isDashboard) {
    return NextResponse.redirect(new URL("/auth/login", req.url));  
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"], 
};
