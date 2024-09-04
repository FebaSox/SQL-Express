//Imports 
const dotenv = require('dotenv');

const results = dotenv.config();

if (results.error) {
    console.log('Error configuring enviorment variables. Check your .env file');
    throw results.error;
}



const configInfo = {
    PORT: process.env.PORT || 5559,
   mysql: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_SCHEMA   
    }
}

module.exports = configInfo;