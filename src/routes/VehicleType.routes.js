const express = require('express')
const router = express.Router()
const VehicleTypeController = require('../controllers/VehicleType.controller');

// Retrieve all employees
router.get('/', VehicleTypeController.findAll);

// Create a new employee
router.post('/', VehicleTypeController.create);

// Retrieve a single employee with id
router.get('/:id', VehicleTypeController.findById);

router.get('/makeid/:id', VehicleTypeController.findByMakeId)

// Update a employee with id
router.put('/:id', VehicleTypeController.update);

// Delete a employee with id
router.delete('/:id', VehicleTypeController.delete);

module.exports = router