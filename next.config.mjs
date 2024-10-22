/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        pathname: "/v0/b/videocallapp-4fbc2.appspot.com/o/**",
      },
    ],
  },
  pageExtensions: ["ts", "tsx"],
};

export default withNextIntl(nextConfig);
