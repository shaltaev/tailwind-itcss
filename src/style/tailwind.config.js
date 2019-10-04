const fontFamily = require("./00-settings/fonts");
const colors = require("./00-settings/colors");
module.exports = {
  theme: {
    fontFamily: { ...fontFamily }
  },
  extend: {
    colors: { ...colors }
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"]
  },
  plugins: []
};
