const express = require('express');
const router = express.Router();
const driverController = require('../controllers/driver');

router.get('/', driverController.list);
router.post('/', driverController.create);
router.get('/:id', driverController.get);
router.put('/:id', driverController.update);
router.delete('/:id', driverController.remove);

module.exports = router;
