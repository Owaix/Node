const express = require('express')
const router = express.Router()
const FeatureVehicleController = require('../controllers/FeatureVehicle.controller');

// Retrieve all employees
router.get('/', FeatureVehicleController.findAll);

// Create a new employee
router.post('/', FeatureVehicleController.create);

// Retrieve a single employee with id
router.get('/:id', FeatureVehicleController.findById);

// Update a employee with id
router.put('/:id', FeatureVehicleController.update);

// Delete a employee with id
router.delete('/:id', FeatureVehicleController.delete);

module.exports = router