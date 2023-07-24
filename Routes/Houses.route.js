const express = require('express');
const router = express.Router();

const HouseController = require('../Controllers/House.Controller');

//Get a list of all houses
router.get('/', HouseController.getAllHouses);

//Create a new house
router.post('/', HouseController.createNewHouse);

//Get a house by id
router.get('/:id', HouseController.findHouseById);

//Update a house by id
router.patch('/:id', HouseController.updateAHouse);

//Delete a house by id
router.delete('/:id', HouseController.deleteAHouse);




module.exports = router;
