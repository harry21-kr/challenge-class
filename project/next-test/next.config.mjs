/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "dnvefa72aowie.cloudfront.net",
      },
      { hostname: "xzinypinhazkqlgfumfn.supabase.co" },
    ],
  },
};

export default nextConfig;
