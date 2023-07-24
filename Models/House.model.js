const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const houseCollectionName = process.env.COLLECTION_NAME || 'housing';

const HouseSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    required: true
  },
  availableUnits: {
    type: Number,
    required: true
  },
  wifi: {
    type: Boolean,
    required: true
  },
  laundry: {
    type: Boolean,
    required: true
  },
  kitchen: {
    type: Boolean,
    required: true
  },
  tv: {
    type: Boolean,
    required: true
  },
  patio: {
    type: Boolean,
    required: true
  },
  parking: {
    type: Boolean,
    required: true
  },
  pets: {
    type: Boolean,
    required: true
  }
}, { collection: houseCollectionName });

const HouseModel = mongoose.model('House', HouseSchema, houseCollectionName);
module.exports = HouseModel;
