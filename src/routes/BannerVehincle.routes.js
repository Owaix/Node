const express = require('express')
const router = express.Router()
const BannerVehincleController = require('../controllers/BannerVehincle.controller');

// Retrieve all employees
router.get('/', BannerVehincleController.findAll);

// Create a new employee
router.post('/', BannerVehincleController.create);

// Retrieve a single employee with id
router.get('/:id', BannerVehincleController.findById);

// Update a employee with id
router.put('/:id', BannerVehincleController.update);

// Delete a employee with id
router.delete('/:id', BannerVehincleController.delete);

module.exports = router