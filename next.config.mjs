/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || `https://${process.env.VERCEL_URL}`,
    },
  };
  
  export default nextConfig;
  