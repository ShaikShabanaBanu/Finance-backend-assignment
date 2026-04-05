
const mongoose = require("mongoose");

const financeSchema = new mongoose.Schema({
  amount:Number,
  type:{type:String, enum:["income","expense"]},
  category:String,
  date:{type:Date, default:Date.now},
  notes:String
});

module.exports = mongoose.model("Finance", financeSchema);
