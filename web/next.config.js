const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
require("dotenv").config();

module.exports = withSass(
  withCSS({
    env: {
      MONGODB_URI: process.env.MONGODB_URI,
      WEB_URI: process.env.WEB_URI,
      FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
      FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
      FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
      FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
      FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL,
      FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    },
  })
);
