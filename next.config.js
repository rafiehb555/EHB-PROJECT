/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/_next/:path*", // Allow internal _next resources
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*" // You can restrict to specific IP instead of '*'
          }
        ]
      }
    ];
  }
};

module.exports = nextConfig;
