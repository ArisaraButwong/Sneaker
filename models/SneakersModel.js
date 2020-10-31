const mongoose = require("mongoose");

const SneakersSchema = new mongoose.Schema({
    id: Number,
    name: String,
    generation: String
});

const Sneakers = mongoose.model('Sneakers',SneakersSchema);
module.exports = Sneakers;


