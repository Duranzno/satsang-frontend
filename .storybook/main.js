const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: ['@storybook/addon-actions', '@storybook/addon-links', "@storybook/addon-viewport"],
  // Add nextjs preset
  presets: [path.resolve(__dirname, "./next-preset.js")],
};
