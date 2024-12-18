/** @type {import('next').NextConfig} */
module.exports = {
  basePath: '/Developer_Portfolio',  // Ensure this matches your GitHub repository name
  trailingSlash: true,
  images: {
    unoptimized: true,  // Disable image optimization to avoid issues during static export
  },
}
