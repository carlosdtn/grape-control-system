/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'www.dfking.com',
      'www.camposol.com',
      'drive.google.com',
      'fenixdelperu.com.pe'
    ]
  }
}

module.exports = nextConfig
