import { mongoose } from "mongoose";

mongoose.connect(
  "mongodb+srv://venkyvenkatiit@cluster-paytm.xyl9grg.mongodb.net   ",
);

const useSchema = mongoose.Schema({
  userName: String,
  passWord: String,
  firstName: String,
  lastName: String,
});

const User = mongoose.model("User", useSchema);

module.exports = {User};

