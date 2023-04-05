module.exports = {
  "stories": ["../src/**/*.mdx", "../src/**/*.stories.@(ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  "framework": {
    name: "@storybook/react-vite",
    options: {}
  },
  "staticDirs": ['../public'],
  async viteFinal(config, { isProd }) {
    // Set the base URL for production builds on GitHub Pages
    if (isProd && process.env.GITHUB_ACTIONS) {
      config.base = "/ecom-designsystem/"; // Replace with your repository name
      return config;
    }

     config.base = process.env.BASE_URL || config.base;
    return config;
    
  },
  docs: {
    autodocs: true
  }
};