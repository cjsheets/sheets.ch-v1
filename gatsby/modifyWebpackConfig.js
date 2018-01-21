'use strict';

module.exports = ({config, stage}) => {
  if (stage === 'build-javascript') {
    config.loader('typescript', {
      test: /\.tsx?$/,
      loaders: [
        `babel-loader?${JSON.stringify({presets: ['babel-preset-env'], plugins: [extractQueryPlugin]})}`,
        'ts-loader'
      ]
    });
  }
};