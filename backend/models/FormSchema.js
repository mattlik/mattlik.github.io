const mongoose = require("mongoose")
const Schema = mongoose.Schema

const formSchema = new Schema(
  {
    checkbox: {
      type: String,
    },
    name: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
    },
    zip: {
      type: Number,
    },
    email: {
      type: String,
      required: true,
    },
    how: {
      type: String,
    },
    message: {
      type: String,
    },
  },
  {
    collection: "Leads",
  }
)

module.exports = mongoose.model("FormSchema", formSchema)
