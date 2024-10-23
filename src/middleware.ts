import createMiddleware from "next-intl/middleware";

import {routing} from "./app/navigation";

// import {NextResponse, NextRequest} from "next/server";

// export function middleware(request: NextRequest) {
//   const locale = cookies().get("NEXT_LOCALE")?.value;
//   const token = cookies().get("sessionToken");

//   console.log("token from middleware: ", token);

//   if (request.nextUrl.pathname === "/") {
//     // Điều hướng đến ngôn ngữ phù hợp hoặc mặc định
//     return NextResponse.redirect(new URL(locale ? `/${locale}` : "/en", request.url));
//   }

//   return NextResponse.next();
// }

export default createMiddleware(routing);

export const config = {
  matcher: ["/", "/(vi|en)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};

// import createMiddleware from "next-intl/middleware";
// import {cookies} from "next/headers";
// import {NextResponse, NextRequest} from "next/server";

// export function middleware(request: NextRequest) {
//   const locale = cookies().get("NEXT_LOCALE");

//   const token = cookies().get("sessionToken");
//   console.log("token from middleware: ", token);

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
// }
