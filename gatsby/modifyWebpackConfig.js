const path = require('path');

// Add Gatsby's extract-graphql Babel plugin (we'll chain it with babel-loader)
const extractQueryPlugin = path.resolve(
  __dirname,
  `../node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js`
);

// Temporary workaround to ensure Gatsby builds minified, production build of React.
// https://github.com/fabien0102/gatsby-starter/issues/39#issuecomment-343647558

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