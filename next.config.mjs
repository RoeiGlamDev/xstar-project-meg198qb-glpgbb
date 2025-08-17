import { NextResponse } from 'next/server';

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Replace with your image domain
  },
  optimization: {
    minimize: true
},
  async rewrites() {
    return [
      {
        source: '/reviews',
        destination: '/api/reviews', // API route for fetching reviews
      },
    ];
  }
};

export default nextConfig;