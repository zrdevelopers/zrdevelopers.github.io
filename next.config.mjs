/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: "/",
  output: "export",
  images: {
    unoptimized: true,
    loader: 'akamai',
    path: ''
  }
};

export default nextConfig;
