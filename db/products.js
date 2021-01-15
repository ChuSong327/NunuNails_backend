const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    imagePath: { type: String, required: true }
});

module.exports = mongoose.model("Products", ProductSchema);
