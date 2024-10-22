import createMiddleware from "next-intl/middleware";

import {routing} from "./app/navigation";

export default createMiddleware(routing);

export const config = {
  matcher: ["/", "/(vi|en)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};

// import createMiddleware from "next-intl/middleware";
// import {cookies} from "next/headers";
// import {NextResponse, NextRequest} from "next/server";

// export function middleware(request: NextRequest) {
//   const locale = cookies().get("NEXT_LOCALE");

//   if (request.nextUrl.pathname === "/")
//     return NextResponse.redirect(new URL(locale ? `/${locale.value}` : "/en", request.url));

//   return NextResponse.next();
// }

// export default createMiddleware({
//   locales: ["en", "vn"],
//   defaultLocale: "vn",
// });

// export const config = {
//   matcher: ["/", "/(vn|en)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
// };
