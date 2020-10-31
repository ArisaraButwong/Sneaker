const express = require('express');
const router = express.Router();

const SneakersController = require('./../controllers/SneakersController');

//เรียกใช้ api ที่สร้างขึ้นมา
router
.route('/')
.get(SneakersController.getAllSneakers)
.post(SneakersController.createSneakers);

router
.route('/:id')
.get(SneakersController.getSneakers)
.put(SneakersController.updateSneakers)
.delete(SneakersController.deleteSneakers);

module.exports = router;
