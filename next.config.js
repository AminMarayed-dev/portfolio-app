/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  webpack: (config, { isServer, dev }) => {
    // Add polling for Windows development environment
    if (!isServer && dev) {
      config.watchOptions = {
        poll: 1000, // Check for changes every second
        aggregateTimeout: 300, // Delay before rebuilding
        ignored: /node_modules/,
      };
    }
    return config;
  },
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  // Image optimization
  images: {
    domains: [],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
