module.exports = {
  "stories": ["../src/**/*.mdx", "../src/**/*.stories.@(ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  "framework": {
    name: "@storybook/react-vite",
    options: {}
  },
  "staticDirs": ['../public'],
  async viteFinal(config) {
    config.base = process.env.NODE_ENV === "production" ? "/ecom-designsystem/" : "/";
    return config;
    
  },
  assetPrefix: process.env.BASE_URL || "/",
  docs: {
    autodocs: true
  }
};