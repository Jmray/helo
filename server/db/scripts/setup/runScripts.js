require('dotenv').config({path: require('find-config')('.env')});
const massive = require('massive');

const {
    DB_CONNECTION_STRING
} = process.env;


massive(DB_CONNECTION_STRING, { scripts: require('find-config')('scripts')})
    .then(dbInstance => {
        
        return dbInstance.query(`CREATE TABLE "Users" (
            id SERIAL PRIMARY KEY,
            username VARCHAR(30),
            password VARCHAR(50),
            profile_image text
        );`);
    })
    .then(() => {
        console.log('created');
    })
    .catch(e => {
        console.error(e);
    });