const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// create new builder (post)
router.post('/', (req, res, next) => {
    console.log(req.body);
    console.log("befor Input...")
    if (req.isAuthenticated()) {
        const queryText = `INSERT INTO "builder"
                     ("builder_name", 
                      "build_brand")
                      VALUES ($1, $2) RETURNING "id";`;
        pool.query(queryText, [req.body.builder_name,
        req.body.brand])
        .then((results) => {
    // Insert empty file for builder
     const anotherQuery = `INSERT INTO "build_file"
          ("user_id",
          "builder_id") 
           VALUES ($1, $2);`;
     pool.query(anotherQuery, [results.rows[0].id,
     req.user.id]).then(() => {
         console.log('server side intake Post');
         res.sendStatus(201);
     })
     .catch(error => {
         res.sendStatus(500);

})
        }).catch((error) => {
                console.log('Something went wrong in intake post', error);

                res.sendStatus(500);
            });
    }
});

router.get('/', (req, res) => {
    console.log('in GET ')
    if (req.isAuthenticated()) {
        console.log('req.user:', req.user);
        pool.query(`SELECT * FROM "builder" 
                    ORDER BY "id" DESC;`)
            .then(results => {
                console.log(results.rows)
                res.send(results.rows)
            })
            .catch(error => {
                console.log('Error making SELECT for builder info database:', error);
                res.sendStatus(500);
            });
    } else {
        // They are not authenticated.
        res.sendStatus(403);
    }
});

module.exports = router;
