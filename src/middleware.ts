import createMiddleware from "next-intl/middleware";

import {routing} from "./app/navigation";

export default createMiddleware(routing);

export const config = {
  matcher: ["/", "/(vi|en)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
