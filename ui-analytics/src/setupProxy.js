const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        ['/status', '/druid/*',],
        createProxyMiddleware({
            target: 'http://ec2-107-21-84-30.compute-1.amazonaws.com:8888',
            changeOrigin: true,
            pathRewrite: {
                '^/status': '/status', // rewrite path
                '^/druid': '/druid', // rewrite path
            },
        })
    );
};