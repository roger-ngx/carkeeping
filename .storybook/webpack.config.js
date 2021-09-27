const path = require('path');

//https://github.com/storybookjs/storybook/issues/3916
module.exports = ({ config }) => {
  config.resolve.modules.push(path.resolve(__dirname, "../"));
  return config;
};