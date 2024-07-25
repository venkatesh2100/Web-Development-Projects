import { mongoose } from "mongoose";
import { MONGO_URL } from "./routes/config";
mongoose.connect(MONGO_URL);

const useSchema = new mongoose.Schema({
  userName: {
    type: String,
    require: true,
    trim: true,
    minLength: 3,
    maxLength: 30,
    lowercase: true,
    unique: true,
  },
  passWord: {
    type: String,
    require: true,
    minLength: 6,
    require: true,
  },
  firstName: {
    type: String,
    trim: true,
    maxLength: 30,
    require: true,
  },
  lastName: {
    type: String,
    trim: true,
    maxLength: 30,
    require: true,
  },
});

const accountSchema=new mongoose.Schema({
  userId:{
    type:mongoose.Schema.Types.objectId,
    ref:"User",
    require:true
  },
  balance:{
    type:Number,
    require:true
  }
})

const User = mongoose.model("User", useSchema);
const Account = mongoose.model("Account", accountSchema);


module.exports = { User ,
  Account
};
