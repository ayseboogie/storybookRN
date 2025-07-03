const path = require("path");
const { getDefaultConfig } = require("expo/metro-config");
const withStorybook = require("@storybook/react-native/metro/withStorybook");

const defaultConfig = getDefaultConfig(__dirname);

// Configure for pnpm compatibility
defaultConfig.resolver.nodeModulesPaths = [
  path.resolve(__dirname, "node_modules"),
];

defaultConfig.resolver.disableHierarchicalLookup = false;

// Fix for pnpm TreeFS issues
defaultConfig.watchFolders = [
  path.resolve(__dirname, "node_modules"),
];

// Clear Metro cache more aggressively for pnpm
defaultConfig.resetCache = true;

module.exports = withStorybook(defaultConfig, {
  enabled: true,
  configPath: path.resolve(__dirname, "./.storybook"),
  useJs: true,
});
