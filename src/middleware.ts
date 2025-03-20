import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname;

  // Define public paths that don't require authentication
  const isPublicPath =
    path === "/" ||
    path === "/login" ||
    path === "/chat" ||
    path.startsWith("/api/") ||
    path.includes("."); // For static files

  // Check if user is authenticated (in a real app, you'd check for a valid session)
  // For this demo, we'll simulate authentication with a cookie
  const isAuthenticated = request.cookies.has("auth");

  // Redirect logic
  if (path.startsWith("/dashboard") && !isAuthenticated) {
    // Redirect to login if trying to access dashboard without authentication
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Allow access to public paths
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
