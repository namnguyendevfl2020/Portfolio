const fs = require('fs');

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
    publicRuntimeConfig: {
        apiUrl: process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000/api' // development api
            : 'http://localhost:3000/api' // production api
    },
    webpack: (config, { isServer }) => {
        if (isServer) {
            // reset users json on codesandbox every 10 minutes because 
            // the same json data is viewed by all users
            setInterval(() => {
                const defaultUsers = [];
                fs.writeFileSync('data/users.json', JSON.stringify(defaultUsers, null, 4));
                console.log('users reset to default in next.config.js');
            }, 10 * 60 * 1000);
        }

        return config;
    }
    }
}
