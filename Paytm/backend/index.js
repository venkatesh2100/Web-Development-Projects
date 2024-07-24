import express from "express";
import mainroute from "./routes/index"
import cors from 'cors'
const  router = express.Router();
const app=express();

app.use(cors());
app.use(express.json());
app.use("/api/v1",mainroute)


app.listen(3000,()=>{
  console.log("Port is listen");
})
module.exports = router;


