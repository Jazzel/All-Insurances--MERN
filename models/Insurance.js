const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InsuranceSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    insuranceType: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = InsuranceSchema = mongoose.model("Insurance", InsuranceSchema);
