const { override, addWebpackAlias, useEslintRc } = require("customize-cra");

module.exports = override(
  useEslintRc(),
  addWebpackAlias({
    react: "preact/compat",
    "react-dom": "preact/compat"
  })
);
