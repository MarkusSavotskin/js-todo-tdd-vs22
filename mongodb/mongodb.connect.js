const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://user:password@localhost:27017/tests", {
      useNewUrlPraser: true,
    });
  } catch (err) {
    console.log("Error connecting to mongodb");
    console.log(err);
  }
}

module.exports = { connect };
