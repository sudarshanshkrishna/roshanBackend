const mongoose = require("mongoose");
const { createHmac } = require("node:crypto");
import { v4 as uuidv4 } from "uuid";

const buyerSchema = new mongoose.Schema({
  customerId: {
    type: ObjectId,
    ref: "Customer",
    required: true,
  },
  name: {
    type: String,
    required: true,
    maxlength: 32,
    trim: true,
  },
  lastName: {
    type: String,
    maxlength: 32,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  phone: {
    type: Integer,
    required: true,
    unique: true,
    trim: true,
  },
  country: {
    type: String,
    required: true,
    trim: true,
  },
});
//const buyer = mongoose.model("Buyer", buyerSchema);
module.exports = mongoose.model("Buyer", buyerSchema);
