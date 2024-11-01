import {NextRequest, NextResponse} from "next/server";
import createMiddleware from "next-intl/middleware";

import {routing} from "./app/navigation";

const authPaths = ["login", "register"];
const privatePaths = ["checkout", "cart", "wishlist"];

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname.split("/");
  const sessionToken = request.cookies.get("sessionToken")?.value;

  if (authPaths.some((authPath) => pathname.includes(authPath)) && sessionToken) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  } else if (privatePaths.some((path) => pathname.includes(path)) && !sessionToken) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }

  const handleI18Routing = createMiddleware(routing);

  const response = handleI18Routing(request);

  return response;
}

export const config = {
  matcher: [
    "/",
    "/(vi|en)/:path*",
    "/((?!_next|_vercel|.*\\..*).*)",
    "/login",
    "/register",
    "/cart",
    "/checkout",
  ],
};
