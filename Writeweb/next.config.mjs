/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // 允许局域网IP地址访问开发资源
  allowedDevOrigins: ['192.168.110.179', 'localhost'],
}

export default nextConfig
