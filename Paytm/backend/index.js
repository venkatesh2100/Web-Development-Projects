const express = require("express");
import rootRouter from './routes/index'
const cors=require("cors");
const app=express();



app.use(cors());
app.use(express.json());
app.use("/api/vi",rootRouter)


app.listen(3000,()=>{
  console.log("listen at port 3000");
})