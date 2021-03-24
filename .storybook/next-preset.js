const path = require('path');

module.exports = {
  webpackFinal: async (baseConfig, options) => {
    const { module = {} } = baseConfig;

    const newConfig = {
      ...baseConfig,
      module: {
        ...module,
        rules: [...(module.rules || [])],
      },
    };

    // TypeScript
    newConfig.module.rules.push({
      test: /\.(ts|tsx)$/,
      include: [path.resolve(__dirname, '..src/components')],
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['next/babel', require.resolve('babel-preset-react-app')],
            plugins: ['react-docgen'],
          },
        },
      ],
    });
    newConfig.resolve.extensions.push('.ts', '.tsx');

    // SCSS
    newConfig.module.rules.push({
      test: /\.(s*)css$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../styles/global.scss'),
    });

    //
    // CSS Modules
    // Many thanks to https://github.com/storybookjs/storybook/issues/6055#issuecomment-521046352
    //

    // First we prevent webpack from using Storybook CSS rules to process CSS modules
    newConfig.module.rules.find(
      rule => rule.test.toString() === '/\\.css$/'
    ).exclude = /\.module\.css$/;

    // Then we tell webpack what to do with CSS modules
    newConfig.module.rules.push({
      test: /\.module\.css$/,
      include: path.resolve(__dirname, '../src/components'),
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: true,
          },
        },
      ],
    });

    return newConfig;
  },
};
