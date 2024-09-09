
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://ujaimwndnztuigitjxr44mztca0dopro.lambda-url.eu-west-2.on.aws',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // remove /api prefix when forwarding to server
      },
    })
  );
};
