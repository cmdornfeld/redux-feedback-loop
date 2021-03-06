const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// Receives payload/data from postFeedback function in Review.js
router.post('/', (req, res) => {
    const newFeedback = req.body;
    const sqlText = `INSERT INTO feedback (feeling, understanding, support, comments) 
        VALUES ($1, $2, $3, $4)`;
    // Request to send our payload/data (newFeedback/req.body) to our database
    // the sqlText informs the database that the info will be inserted into the feedback table
    // and the newFeedback.[property] indicates the value to insert for that property of the table
    pool.query(sqlText, [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments])
      .then((result) => {
        console.log(`Added feedback to the database`, newFeedback);
        res.sendStatus(201);
      })
      .catch((error) => {
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500);
      })
  })

  module.exports = router;