const basePath = process.env.NODE_ENV === "production" ? "/search-box-component" : ""
const assetPrefix = process.env.NODE_ENV === "production" ? "/search-box-component" : "/"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: basePath,
  assetPrefix: assetPrefix
}

module.exports = nextConfig
