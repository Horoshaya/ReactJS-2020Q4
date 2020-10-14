function getEnvironment() {
  const environment = process.env.NODE_ENV;
  return environment ? environment.toLowerCase() : "dev";
}

module.exports = require(`./config/webpack.config.${getEnvironment()}`);
