const express = require('express');
const path = require("path");
const { createProxyMiddleware } = require('http-proxy-middleware');

// Create Express Server
const app = express();

// Configuration
const PORT = 5000;
const HOST = "0.0.0.0";
const API_SERVICE_URL = "http://ec2-107-21-84-30.compute-1.amazonaws.com:8888";

app.use(express.static(path.join(__dirname, 'build')));

// Proxy endpoints
app.use(
    ['/status', '/druid/*',],
    createProxyMiddleware({
        target: API_SERVICE_URL,
        changeOrigin: true,
        pathRewrite: {
            '^/status': '/status', // rewrite path
            '^/druid': '/druid', // rewrite path
        },
    })
);

// Start Proxy
app.listen(PORT, HOST, () => {
    console.log(`Starting Proxy at ${HOST}:${PORT}`);
});