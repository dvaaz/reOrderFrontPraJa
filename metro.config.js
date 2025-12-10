// const path = require("path");
// const { getMetroConfig } = require("expo-router/metro");

// // Garante que o Router use o diretório de rotas dentro de src/app
// process.env.EXPO_ROUTER_APP_ROOT = process.env.EXPO_ROUTER_APP_ROOT || "src/app";

// const config = getMetroConfig(__dirname);

// config.resolver = {
//   ...config.resolver,
//   alias: {
//     ...(config.resolver?.alias ?? {}),
//     "@": path.resolve(__dirname, "src"),
//   },
// };

// module.exports = config;

const path = require("path");
const { getDefaultConfig } = require("expo/metro-config");

// define root
process.env.EXPO_ROUTER_APP_ROOT = process.env.EXPO_ROUTER_APP_ROOT || "src/app";

const config = getDefaultConfig(__dirname);

// alias @ -> src
config.resolver.alias = {
  ...(config.resolver.alias || {}),
  "@": path.resolve(__dirname, "src"),
};

module.exports = config;

