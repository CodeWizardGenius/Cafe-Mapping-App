module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // Explicitly not using any plugins to avoid NativeWind issues
    plugins: []
  };
};
