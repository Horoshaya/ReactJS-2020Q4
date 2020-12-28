function getEnvironment() {
  const environment = process.env.NODE_ENV;
  return environment ? environment.toLowerCase() : 'dev';
}

const client = require(`./config/webpack.config.${getEnvironment()}`);
module.exports = [client];
