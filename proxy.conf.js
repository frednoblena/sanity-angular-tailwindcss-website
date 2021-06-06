const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'https://a7kptv8g.api.sanity.io',
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
    secure: false,
  },
];

module.exports = PROXY_CONFIG;