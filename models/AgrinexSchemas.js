const mongoose = require('mongoose');

// Farmer Schema
const farmerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  location: String,
  crops: [String]
}, { timestamps: true });

// Product Schema
const productSchema = new mongoose.Schema({
  farmerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Farmer' },
  title: { type: String, required: true },
  category: String,
  pricePerUnit: Number,
  quantityAvailable: Number,
  unit: String
}, { timestamps: true });

// RFQ Schema (Buyer Requests)
const rfqSchema = new mongoose.Schema({
  buyerName: String,
  productRequired: String,
  quantityRequired: Number,
  targetPrice: Number,
  status: { type: String, default: 'Pending' }
}, { timestamps: true });

module.exports = {
  Farmer: mongoose.model('Farmer', farmerSchema),
  Product: mongoose.model('Product', productSchema),
  RFQ: mongoose.model('RFQ', rfqSchema)
};
