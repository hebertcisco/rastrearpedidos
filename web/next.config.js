const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
require("dotenv").config();
const withPWA = require("next-pwa");

module.exports = withSass(
  withCSS(
    withPWA({
      env: {
        WEB_URI: process.env.WEB_URI,
      },
      pwa: {
        dest: "public",
      },
    })
  )
);
