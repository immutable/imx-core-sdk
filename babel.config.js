module.exports = api => {
  let plugins = ['@babel/plugin-transform-runtime'];

  if (api.env() !== 'production') {
    plugins = [...plugins];
  }

  return {
    sourceMaps: true,
    presets: ['@babel/preset-env', '@babel/preset-typescript'],
    plugins,
  };
};
