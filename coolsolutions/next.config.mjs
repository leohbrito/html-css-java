/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Produce a fully static build for simple static hosting
  output: 'export',
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    // Required for static export when using next/image
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "assets.acme.com" },
      { protocol: "https", hostname: "images.unsplash.com" }
    ]
  }
};

export default nextConfig;
