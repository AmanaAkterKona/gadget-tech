import { NextResponse } from "next/server";

export function middleware(request) {
  const path = request.nextUrl.pathname;
  const auth = request.cookies.get("auth")?.value;

  // Protected routes
  const isProtectedPath = path.startsWith("/add-item");
  
  // Redirect to login if not authenticated
  if (isProtectedPath && auth !== "true") {
    const loginUrl = new URL("/login", request.url);
    // Optional: Add redirect parameter to return after login
    loginUrl.searchParams.set("redirect", path);
    return NextResponse.redirect(loginUrl);
  }

  // Optional: Redirect to items if already logged in and trying to access login
  if (path === "/login" && auth === "true") {
    return NextResponse.redirect(new URL("/items", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/add-item/:path*", "/login"],
};