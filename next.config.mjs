/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: "/",
  output: "export",
  images: {
    unoptimized: true,
    loader: 'akamai',
    path: ''
  },
  webpack: (config) => {
    // Optimize and reduce bundle size
    config.optimization.splitChunks = {
      chunks: 'all',
    };

    // Customize Webpack configuration if needed
    return config;
  }
};

export default nextConfig;
