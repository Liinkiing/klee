const path = require('path');

module.exports = {
  webpackFinal: async config => {
    config.resolve.alias['~'] = path.join(__dirname, '../src');
    config.resolve.extensions.push('.ts', '.tsx');

    return {
      ...config,
    };
  },
  stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx)'],
  addons: [
    '@storybook/addon-viewport',
    '@storybook/addon-storysource',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  typescript: {
    check: true,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    },
  },
};
