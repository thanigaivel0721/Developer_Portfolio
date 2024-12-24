const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  generateEtags: false,
  assetPrefix: isProd ? '/<Developer_Portfolio>/' : '',
  basePath: isProd ? '/<Developer_Portfolio>' : '',
  headers: async () => [
    {
      source: '/_next/static/(.*)',
      headers: [
        { key: 'Cache-Control', value: 'no-store, must-revalidate' },
      ],
    },
  ],
};
