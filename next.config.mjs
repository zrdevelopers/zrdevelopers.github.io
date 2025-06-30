/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true,
    loader: 'akamai',
    path: ''
  },
  experimental: {
    optimizeCss: true
  },
  webpack: (config) => {
    config.optimization.splitChunks = {
      chunks: 'all'
    };
    return config;
  }
};

export default nextConfig;
