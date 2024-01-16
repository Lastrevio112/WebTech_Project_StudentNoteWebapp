const express = require('express');
const router = express.Router();

// Route to get all notes
router.get('/', (req, res) => {
    res.send('Notes fetched');
});

// We'll add more routes as needed...

module.exports = router;
