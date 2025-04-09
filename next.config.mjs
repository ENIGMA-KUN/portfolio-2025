/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: 'export',  // Enable static HTML export
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
    // Ensures images are not automatically optimized by Next.js
    unoptimized: true,
  },
  experimental: {
    // Keeps CSS optimization turned off
    optimizeCss: false,
  },
}

export default nextConfig
