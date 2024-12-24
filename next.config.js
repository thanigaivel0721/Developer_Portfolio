module.exports = {
  generateEtags: false,
  headers: async () => [
    {
      source: '/_next/static/(.*)',
      headers: [
        { key: 'Cache-Control', value: 'no-store, must-revalidate' },
      ],
    },
  ],
};const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? '/Developer_Portfolio/' : '',
  basePath: isProd ? '/Developer_Portfolio' : '',
  images: {
    unoptimized: true, // This disables image optimization in production for GitHub Pages
  },
};

