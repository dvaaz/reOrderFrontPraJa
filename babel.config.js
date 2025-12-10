module.exports = function (api) {
  api.cache(true);

  // Aponta o Expo Router para a pasta de rotas localizada em src/app
  process.env.EXPO_ROUTER_APP_ROOT = process.env.EXPO_ROUTER_APP_ROOT || "src/app";

  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "expo-router/babel",
      // O plugin do Reanimated precisa ficar por último
      "react-native-reanimated/plugin",
    ],
  };
};
