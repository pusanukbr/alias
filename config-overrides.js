const path = require('path');

// eslint-disable-next-line no-undef
module.exports = {
  paths: function (paths) {
    // eslint-disable-next-line no-undef
    paths.appIndexJs = path.resolve(__dirname, 'client/index.js');
    // eslint-disable-next-line no-undef
    paths.appSrc = path.resolve(__dirname, 'client');
    return paths;
  }
};
