/*
 * Necessary to allow jest to interpret correctlty the images,
 * Ref: https://jestjs.io/docs/code-transformation#typescript-with-type-checking
 */

const path = require('path');

module.exports = {
  process(src, filename, config, options) {
    return 'module.exports = ' + JSON.stringify(path.basename(filename)) + ';';
  },
};