const postcssPresetEnvPlugin = require("postcss-preset-env");
const tailwindPlugin = require("tailwindcss");
module.exports = {
  plugins: [
    tailwindPlugin(),
    postcssPresetEnvPlugin({
      features: {
        "nesting-rules": true
      }
    })
  ]
};
