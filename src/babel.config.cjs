module.exports = api => {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: [
            '.android.js',
            '.android.jsx',
            '.ios.js',
            '.ios.jsx',
            '.js',
            '.json',
            '.jsx',
            '.ts',
            '.tsx',
            '.ttf',
          ],
          // root: ['.'],
          alias: {
            '@': './src',
          },
        },
      ],
    ],
  }
}
