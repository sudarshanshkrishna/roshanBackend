const mongoose = require("mongoose");
const { createHmac } = require("node:crypto");
const { v4: uuidv4 } = require("uuid");
//const  = require("uuid");

var userSchema = new mongoose.Schema(
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
    userinfo: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    salt: String,
    role: {
      type: Number,
      default: 0,
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

module.exports = mongoose.model("User", userSchema);
