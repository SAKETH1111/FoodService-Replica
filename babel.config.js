module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current', // This will target the current Node version.
        },
      },
    ],
    '@babel/preset-react',
  ],
};

  