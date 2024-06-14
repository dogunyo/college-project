const studentcontroller = require('../controller/studentcontroller');
const express = require('express');
const routes = express.Router();


// Get a list of students from the database
routes.get('/students', (req, res) => {
    res.send({ type: 'Get Request' });
});

// Add a student to the database
routes.post('/addStudent',studentcontroller.addstudent);

// Update a student in the database
routes.put('/students/:id', (req, res) => {
    res.send({ type: 'Update Request' });
});

// Delete a student from the database
routes.delete('/students/:id', (req, res) => {
    res.send({ type: 'Delete Request' });
});

module.exports = routes;