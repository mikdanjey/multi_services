const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        ['/status', '/druid/*',],
        createProxyMiddleware({
            target: 'http://3.88.194.150:8888', //  "proxy": "http://3.88.194.150:8888",
            changeOrigin: true,
            pathRewrite: {
                '^/status': '/status', // rewrite path
                '^/druid': '/druid', // rewrite path
            },
        })
    );
};