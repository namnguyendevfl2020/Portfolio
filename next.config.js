const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants')

require('dotenv').config();

const {
  APP_EMAIL_USERNAME,
  APP_EMAIL_PW,
} = process.env;

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'
  const isStaging =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1'

  console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`)
    return {
        serverRuntimeConfig: {
          APP_EMAIL_USERNAME,
          APP_EMAIL_PW,
        },
        publicRuntimeConfig: {
          API_BASEURL: isDev ? "http://localhost:3000/api" : "/api"
        },
    }
}
