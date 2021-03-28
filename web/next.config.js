const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
require("dotenv").config();

module.exports = withSass(
  withCSS({
    env: {
      WEB_URI: process.env.WEB_URI,
    },
  })
);
