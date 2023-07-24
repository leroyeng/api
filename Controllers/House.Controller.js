const createError = require('http-errors');
const mongoose = require('mongoose');

const HouseModel = require('../Models/House.model');


module.exports = {
  getAllHouses: async (req, res, next) => {
    try {
      const results = await HouseModel.find({}, { __v: 0 });
      console.log('Results:', results);
      // const results = await Product.find({}, { name: 1, price: 1, _id: 0 });
      // const results = await Product.find({ price: 699 }, {});
      res.send(results);
    } catch (error) {
      console.log(error.message);
    }
  },

  createNewHouse
  : async (req, res, next) => {
    try {
      const house = new HouseModel(req.body);
      const result = await house.save();
      console.log('Results:', results);
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error.name === 'ValidationError') {
        next(createError(422, error.message));
        return;
      }
      next(error);
    }
    

    /*Or:
  If you want to use the Promise based approach*/
    /*
  const product = new Product({
    name: req.body.name,
    price: req.body.price
  });
  product
    .save()
    .then(result => {
      console.log(result);
      res.send(result);
    })
    .catch(err => {
      console.log(err.message);
    }); 
    */
  },

  findHouseById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const house = await HouseModel.findById(id);
      // const product = await Product.findOne({ _id: id });
      if (!house) {
        throw createError(404, 'Product does not exist.');
      }
      res.send(house);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid House id'));
        return;
      }
      next(error);
    }
  },

  updateAHouse: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await HouseModel.findByIdAndUpdate(id, updates, options);
      if (!result) {
        throw createError(404, 'Product does not exist');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid Product Id'));
      }

      next(error);
    }
  },

  deleteAHouse: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await HouseModel.findByIdAndDelete(id);
      // console.log(result);
      if (!result) {
        throw createError(404, 'House does not exist.');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid house id'));
        return;
      }
      next(error);
    }
  }
  
};
