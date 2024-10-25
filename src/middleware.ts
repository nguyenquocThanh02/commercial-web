import createMiddleware from "next-intl/middleware";

import {routing} from "./app/navigation";

export default createMiddleware(routing);

// const cookie = cookies();
// const sessionToken = cookie.get("sessionToken");

// console.log("From layout: ", sessionToken);
export const config = {
  matcher: ["/", "/(vi|en)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
