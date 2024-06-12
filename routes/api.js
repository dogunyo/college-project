// Import the Express router
const express = require('express');
const router = express.Router();

// Define your routes
router.get('/students', (req, res) => {
    res.send({ type: 'Get Request' });
});

router.post('/students', (req, res) => {
    res.send({ type: 'Post Request' });
});

router.put('/students/:id', (req, res) => {
    res.send({ type: 'Update Request' });
});

router.delete('/students/:id', (req, res) => {
    res.send({ type: 'Delete Request' });
});

// Export the router so it can be used in other files
module.exports = router;