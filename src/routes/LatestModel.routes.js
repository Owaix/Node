const express = require('express')
const router = express.Router()
const LatestModelController = require('../controllers/LatestModel.controller');

// Retrieve all employees
router.get('/', LatestModelController.findAll);

// Create a new employee
router.post('/', LatestModelController.create);

// Retrieve a single employee with id
router.get('/:id', LatestModelController.findById);

// Update a employee with id
router.put('/:id', LatestModelController.update);

// Delete a employee with id
router.delete('/:id', LatestModelController.delete);

module.exports = router