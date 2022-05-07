var mongoose = require('mongoose');

var cartSchema = new mongoose.Schema({
    products:[]
});

module.exports = mongoose.model("Cart", cartSchema);