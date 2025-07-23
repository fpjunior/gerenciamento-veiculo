const express = require('express');
const router = express.Router();
const tripController = require('../controllers/trip');

router.get('/', tripController.list);
router.post('/', tripController.create);
router.get('/:id', tripController.get);
router.put('/:id', tripController.update);
router.delete('/:id', tripController.remove);

module.exports = router;
