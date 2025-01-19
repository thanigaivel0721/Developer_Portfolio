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
};
