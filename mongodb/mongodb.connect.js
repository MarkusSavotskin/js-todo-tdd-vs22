const mongoose = require("mongoose");

connect = async () => {
  try {
    await mongoose.connect("mongodb://user:password@localhost:27017/tests", {
      useNewUrlPraser: true,
    });
  } catch (err) {
    console.log("Error connecting to mongodb");
    console.log(err);
  }
};
