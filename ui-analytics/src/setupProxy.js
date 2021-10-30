const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        ['/status', '/druid/*',],
        createProxyMiddleware({
            target: 'http://18.209.150.127:8888',
            changeOrigin: true,
            pathRewrite: {
                '^/status': '/status', // rewrite path
                '^/druid': '/druid', // rewrite path
            },
        })
    );
};