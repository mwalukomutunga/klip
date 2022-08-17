/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  distDir: 'build',
  // exportPathMap: async function (
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId }
  // ) {
  //   return {
  //     '/': { page: '/' },
  //     '/fscs': { page: '/fscs' },
  //     '/registeredusers': { page: '/registeredusers' },
  //     '/regions': { page: '/regions' },
  //     '/fscstreams': { page: '/fscstreams' },
  //     '/businessstreams': { page: '/businessstreams' },
     
  //   }
  // },
}

module.exports = nextConfig
