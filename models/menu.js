const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    enum: ['starter', 'main course', 'dessert', 'beverage'],
    required: true
  },
  available: {
    type: Boolean,
    default: true
  },
  imageUrl: {
    type: String
  }
});

const Menu = mongoose.model('Menu', menuSchema);

// This is a comment

module.exports = Menu;
