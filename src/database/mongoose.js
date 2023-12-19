const mongoose = require("mongoose");

exports.dbConnect = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect("mongodb+srv://ayushc9977:Ayush9977@cluster0.tyu8ou8.mongodb.net/YogaApp?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("DATABASE CONNECTED"))
    .catch((error) => {
      console.log("DATABASE NOT CONNECTED");
      console.log(error);
      process.exit(1);
    });
};
