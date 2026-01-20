// middleware.js - এই file টা root এ থাকবে

import { NextResponse } from "next/server";

export function middleware(request) {
  const path = request.nextUrl.pathname;
  const auth = request.cookies.get("auth")?.value;

  // Protected routes - add-item এবং add-items দুটোই protect করা
  const isProtectedPath = 
    path.startsWith("/add-item") || 
    path.startsWith("/add-items");
  
  // Redirect to login if not authenticated
  if (isProtectedPath && auth !== "true") {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", path);
    return NextResponse.redirect(loginUrl);
  }

  // Redirect to home if already logged in and trying to access login
  if (path === "/login" && auth === "true") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/add-item/:path*", "/add-items/:path*", "/login"],
};