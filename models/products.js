const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Item title field is required'],
  },
  description:{
      type: String,
      required: [true,'Item description field is required']
  },
  quantity:{
      type: Number,
      required:[true, 'Item stock quantity is required']
  },
  price:{
    type: Number,
    required:[true, 'Item price is required']
  },
  stock:{
      type: Boolean,
      required:[true,'Item premission is required']
  },
  model:{
      type:String,
      required:[true, 'Item model number is required']
  }

});

// Create model for product
const Product = mongoose.model('product', ProductSchema);

module.exports = Product;