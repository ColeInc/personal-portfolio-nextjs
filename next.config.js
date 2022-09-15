/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    basePath: process.env.NEXT_PUBLIC_REPO_URL,
    assetPrefix: process.env.NEXT_PUBLIC_REPO_URL,
    images: {
        unoptimized: true,
    },
};

module.exports = { nextConfig };
