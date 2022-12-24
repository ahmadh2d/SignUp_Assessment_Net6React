const { createProxyMiddleware } = require('http-proxy-middleware');
const { env } = require('process');
const { USER_REGISTER_URL } = require('./config');

const target = env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}` :
  env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] : 'http://localhost:10000';

const context =  [
  "/weatherforecast",
  `/${USER_REGISTER_URL}`
];

module.exports = function(app) {
  const appProxy = createProxyMiddleware(context, {
    target: target,
    secure: false,
    headers: {
      Connection: 'Keep-Alive'
    }
  });

  app.use(appProxy);
};
