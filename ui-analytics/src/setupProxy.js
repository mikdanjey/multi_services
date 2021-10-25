const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        ['/status', '/druid/*',],
        createProxyMiddleware({
            target: 'http://34.228.196.131:8888',
            changeOrigin: true,
            pathRewrite: {
                '^/status': '/status', // rewrite path
                '^/druid': '/druid', // rewrite path
            },
        })
    );
};