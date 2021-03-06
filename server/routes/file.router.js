const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/:id', (req, res) => {
    console.log('in GET file to get id ')
    console.log('req.params: file get', req.user.id);
    if (req.isAuthenticated()) {
        console.log('req.user:', req.user.id);
        pool.query(`SELECT * FROM "build_file"
                    JOIN "builder" ON "build_file"."builder_id" = "builder"."id"
                    WHERE "build_file"."builder_id" = $1;`, [req.params.id])
            .then(results => {
                console.log(results.rows[0])
                res.send(results.rows[0])
            })
            .catch(error => {
                console.log('Error making SELECT for build file database:', error);
                res.sendStatus(500);
            });
    } else {
      // They are not authenticated.
      res.sendStatus(403);
    }
  });



module.exports = router;