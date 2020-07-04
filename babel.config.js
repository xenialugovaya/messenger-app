module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  plugins: ["@babel/plugin-proposal-class-properties"],
  env: {
    production: {
      plugins: ["babel-plugin-styled-components"],
    },
    development: {
      plugins: [["babel-plugin-styled-components", { sourceMap: true }]],
    },
  },
};
