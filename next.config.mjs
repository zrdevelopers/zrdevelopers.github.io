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
    // Customize Webpack configuration if needed
    return config;
  },
};

export default nextConfig;
