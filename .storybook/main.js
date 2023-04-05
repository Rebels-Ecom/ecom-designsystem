module.exports = {
  "stories": ["../src/**/*.mdx", "../src/**/*.stories.@(ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  "framework": {
    name: "@storybook/react-vite",
    options: {}
  },
  "staticDirs": ['../public'],
  async viteFinal(config) {
  
    config.base = process.env.BASE_URL || config.base;
    return config;  
  },
  assetPrefix: process.env.BASE_URL || "/",
  docs: {
    autodocs: true
  }
};