import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Redirect non-www to www (canonical domain)
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'fyzio-praha.cz',
          },
        ],
        destination: 'https://www.fyzio-praha.cz/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
