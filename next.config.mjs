/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: "/",
  output: 'export',
  swcMinify: true,
  images: {
    unoptimized: true,
    loader: 'akamai',
    path: ''
  },
  webpack: (config) => {
    config.optimization.splitChunks = {
      chunks: 'all'
    };
    return config;
  },
  experimental: {
    optimizeCss: true
  }
};

export default nextConfig;
