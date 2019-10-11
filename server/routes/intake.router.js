const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// create new builder (post)
router.post('/', (req, res, next) => {
    console.log(req.body);
    if (req.isAuthenticated()) {
        const queryText = `INSERT INTO "builder"
                     ("builder_name", 
                      "brand",
                      VALUES ($1, $2) RETURNING "id";`;
        pool.query(queryText, [req.body.builder_name,
        req.body.brand])
            .then((results) => {
                // Insert empty project for new customer
                const anotherQuery = `INSERT INTO "build"
                     ("builder_id", 
                      "user_id") 
                      VALUES ($1, $2);`;
                pool.query(anotherQuery, [results.rows[0].id,
                req.user.id]).then(() => {
                    console.log('server side intake Post');
                    res.sendStatus(201);
                }).catch(error => {
                    res.sendStatus(500);
                })

            })
            .catch((error) => {
                console.log('Something went wrong in intake post', error);

                res.sendStatus(500);
            });
    }
});

module.exports = router;