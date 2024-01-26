const mongoose = require('mongoose');
const { Schema } = mongoose;

  const OrderSchema = new Schema({
        title: {type: String},
        price: {type: Number},
        quantity: {type: Number, default: 1},
    
  },{timestamps: true}
  );



  module.exports = mongoose.model('Order',OrderSchema);
  