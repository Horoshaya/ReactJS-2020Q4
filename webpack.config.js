function getEnvironment() {
  const environment = process.env.NODE_ENV;
  return environment ? environment.toLowerCase() : 'dev';
}

const client = require(`./webpack/webpack.config.${getEnvironment()}`);
module.exports = [client];
