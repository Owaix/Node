const express = require('express')
const router = express.Router()
const ModelController = require('../controllers/Model.controller');

// Retrieve all employees
router.get('/', ModelController.findAll);

// Create a new employee
router.post('/', ModelController.create);

// Retrieve a single employee with id
router.get('/:id', ModelController.findById);

router.get('/vehicleid/:id' , ModelController.findByVehicleTypeID);

// Update a employee with id
router.put('/:id', ModelController.update);

// Delete a employee with id
router.delete('/:id', ModelController.delete);

module.exports = router