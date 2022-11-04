const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const app = express();

//middleware
app.use(cors());
app.use(express.json());

const toursSchema = mongoose.Schema(
  {
    place: {
      type: String,
      require: [true, "Please Provide Name"],
      unique: true,
    },
    description: {
      type: String,
      required: [true, "please provide a description for this tours"],
    },
    image: String,
    cost: {
      type: Number,
      require: true,
      min: [0, "Price can be negative"],
    },
    status: {
      enum: ["active", "inActive"],
    },
  },
  {
    timestamps: true,
  }
);

app.get("/", (req, res) => {
  res.send("successfully");
});

module.exports = app;
