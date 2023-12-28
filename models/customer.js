const mongoose = require("mongoose");
const { createHmac } = require("node:crypto");
import { v4 as uuidv4 } from "uuid";

var customerSchema = new mongoose.Schema(
  {
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
    margin: {
      type: String,
      required: true,
      trim: true,
    },
    bank: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    bankAccountNumber: {
      type: Integer,
      required: true,
      unique: true,
      trim: true,
    },
    userinfo: {
      type: String,
      trim: true,
    },
    // encry_password: {
    //   type: String,
    //   required: true,
    // },
    // salt: String,
    role: {
      type: Number,
      default: -1,
    },

    purchases: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

// userSchema
//   .virtual("password")
//   .set(function (password) {
//     this._password = password;
//     this.salt = uuidv4();
//     this.encry_password = this.securePassword(password);
//   })
//   .get(function () {
//     return this._password;
//   });

// userSchema.method = {
//   authenticate: function (plainPassword) {
//     return this.securePassword(plainPassword) === this.encry_password;
//   },

//   securePassword: function (plainPassword) {
//     if (!password) return "";
//     try {
//       return createHmac("sha256", this.salt)
//         .update(plainPassword)
//         .digest("hex");
//     } catch (err) {
//       return "";
//     }
//   },
// };
// const Customer = mongoose.model("Customer", customerSchema);

module.exports = mongoose.model("Customer", customerSchema);
//module.exports = { Customer, buyer };
