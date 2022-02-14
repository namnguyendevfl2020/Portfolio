require('dotenv').config();

const {
  APP_EMAIL_USERNAME,
  APP_EMAIL_PW
} = process.env;

module.exports =() => {
    return {
        serverRuntimeConfig: {
        APP_EMAIL_USERNAME,
        APP_EMAIL_PW,
        },
    }
}
