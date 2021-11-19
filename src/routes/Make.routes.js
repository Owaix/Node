const express = require('express')
const router = express.Router()
const MakeController = require('../controllers/Make.controller');

// Retrieve all employees
router.get('/', MakeController.findAll);

// Create a new employee
router.post('/', MakeController.create);

// Retrieve a single employee with id
router.get('/:id', MakeController.findById);

// Update a employee with id
router.put('/:id', MakeController.update);

// Delete a employee with id
router.delete('/:id', MakeController.delete);

module.exports = router