const getDb = require('../db/getDb');

module.exports = function addDb(){
    return (req, res, next) => {
        getDb().then(db => {
            req.db = db;
            console.log('connected to database')

            next();
        }).catch(() => {
            res.status(500).send('Error with stuff!');
        });
    };
};