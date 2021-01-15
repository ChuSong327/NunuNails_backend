const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let UserSchema = new Schema({
    username: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    street: { type: String },
    city: { type: String },
    state:{ type: String },
    zipcode: { type: String },
    products: { type: Array }
});

module.exports = mongoose.model("Users", UserSchema);