const express = require('express')
const router = express.Router()
const FeatureCategoryController = require('../controllers/FeatureCategory.controller');

// Retrieve all employees
router.get('/', FeatureCategoryController.findAll);

// Create a new employee
router.post('/', FeatureCategoryController.create);

// Retrieve a single employee with id
router.get('/:id', FeatureCategoryController.findById);

// Update a employee with id
router.put('/:id', FeatureCategoryController.update);

// Delete a employee with id
router.delete('/:id', FeatureCategoryController.delete);

module.exports = router