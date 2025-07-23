const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicle');

router.get('/', vehicleController.list);
router.post('/', vehicleController.create);
router.get('/:id', vehicleController.get);
router.put('/:id', vehicleController.update);
router.delete('/:id', vehicleController.remove);

module.exports = router;
