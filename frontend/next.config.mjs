/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'web',
                port: '8000',
                pathname: '/media/**',
            },
        ],
    }
};

export default nextConfig;
