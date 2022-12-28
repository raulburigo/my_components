const path = require('path')
module.exports = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-interactions',
    // {
    //   name: path.dirname(require.resolve('@storybook/addon-docs/package.json')),
    //   options: { transcludeMarkdown: true },
    // },
    // { name: '@storybook/addon-essentials', options: { docs: false } },
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
}
