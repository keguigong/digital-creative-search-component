const basePath = process.env.NODE_ENV === "production" ? "/digital-creative-search-component" : ""
const assetPrefix =
  process.env.NODE_ENV === "production" ? "/digital-creative-search-component" : "/"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // basePath: basePath,
  // assetPrefix: assetPrefix
}

module.exports = nextConfig
