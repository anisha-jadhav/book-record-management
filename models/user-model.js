// model tells you the structure of the database collection.
// same as schema

// SCHEMA : name: string
//          id: number
//          phone: number

// Model  : name: John
//          id: 123
//          phone: 45677

// we does not export schema, we export model, so while exporting create a model and then export it

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    issuedBook: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
      required: false,
    },
    issuedDate: {
      type: String,
      required: false,
    },
    returnDate: {
      type: String,
      required: false,
    },
    subscriptionType: {
      type: String,
      required: true,
    },
    subscriptionDate: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// collection will have a name 'Users'
// schema name => userSchema,  model name => User
module.exports = mongoose.model("User", userSchema);
