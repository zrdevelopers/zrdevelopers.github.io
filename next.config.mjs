/** @type {import('next').NextConfig} */
import webpack from 'webpack';

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

    // Provide jQuery globally
    config.plugins.push(new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }));

    // Customize Webpack configuration if needed
    return config;
  },
  generateMetadata: true,
};

export default nextConfig;
