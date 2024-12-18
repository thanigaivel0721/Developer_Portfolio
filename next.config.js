/** @type {import('next').NextConfig} */
module.exports = {
  // Set the base path for GitHub Pages if deployed to a subdirectory
  basePath: '/Developer_Portfolio',  // Replace with your GitHub repository name

  // Add trailingSlash to ensure that your paths end with a slash
  trailingSlash: true,

  // If you're using Image Optimization API, you might need to configure it like this
  images: {
    unoptimized: true, // Disable Next.js image optimization to prevent issues with static export
  },
}
