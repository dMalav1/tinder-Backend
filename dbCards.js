import mongoose from "mongoose";
//var mongoose = require("mongoose");

const cardSchema = mongoose.Schema({
    name:String,
    imgUrl:String
});

export default mongoose.model("cards",cardSchema);

//module.exports = require("Cards",cardSchema);
