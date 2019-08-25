/* eslint-env node */
'use strict';

const EngineAddon = require('ember-engines/lib/engine-addon');
const { join } = require('path');
const style_dir = join( __dirname, 'addon', 'styles');

module.exports = EngineAddon.extend({
  name: 'test-engine',

  lazyLoading: Object.freeze({
    enabled: true
  }),

  isDevelopingAddon() {
    return true;
  },

  postcssOptions: {
    compile: {
      enabled: true,
      extension: 'scss',
      parser: require('postcss-scss'),
      plugins: [
        require('@csstools/postcss-sass')
      ]
    },
    filter: {
      enabled: false
    }
  }

});
