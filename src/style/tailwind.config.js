const fontFamily = require("./00-settings/fonts");
const colors = require("./00-settings/colors");
module.exports = {
  theme: {
    fontFamily: { ...fontFamily },
    colors: { ...colors }
  },
  extend: {
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"]
  },
  plugins: []
};
