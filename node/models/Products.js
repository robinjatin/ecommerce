var mongoose = require('mongoose');


var productSchema = new mongoose.Schema({
    productId: String,
    name: String,
    price: Number,
    description: String,
    image: String,
    createdAt: { type: String, default: new Date().toLocaleDateString('en-IN',{  hour: '2-digit', minute: '2-digit' }).toUpperCase()},
});

module.exports = mongoose.model("Product", productSchema);