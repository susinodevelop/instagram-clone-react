/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        //TODO revisar
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'images.pexels.com',
              port: '',
              pathname: '/**',
            },
            {
              protocol: 'https',
              hostname: 'via.placeholder.com',
              port: '',
              pathname: '/**',
            },
            {
              protocol: 'https',
              hostname: 'img.freepik.com',
              port: '',
              pathname: '/**',
            },
          ],
    },
      
};

export default nextConfig;
