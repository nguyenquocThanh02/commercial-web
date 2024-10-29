import createMiddleware from "next-intl/middleware";
import {NextRequest} from "next/server";

import {routing} from "./app/navigation";

// const authPaths = ["login", "register"];
// const privatePaths = ["checkout", "cart"];

export default function middleware(request: NextRequest) {
  // const pathname = request.nextUrl.pathname.split("/");
  // const sessionToken = request.cookies.get("sessionToken")?.value;

  // if (authPaths.some((authPath) => pathname.includes(authPath)) && sessionToken) {
  //   return Response.redirect(new URL("/", request.url));
  // }
  // if (privatePaths.some((path) => pathname.includes(path)) && !sessionToken) {
  //   // request.nextUrl.pathname = `/login`;
  //   return Response.redirect(new URL("/login", request.url));
  // }

  const handleI18Routing = createMiddleware(routing);
  const response = handleI18Routing(request);

  return response;
}

export const config = {
  matcher: ["/", "/(vi|en)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
