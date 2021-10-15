const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        ['/status', '/druid/*',],
        createProxyMiddleware({
            target: 'http://18.232.169.254:8888',
            changeOrigin: true,
            pathRewrite: {
                '^/status': '/status', // rewrite path
                '^/druid': '/druid', // rewrite path
            },
        })
    );
};