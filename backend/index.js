
const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const dotenv=require("dotenv");
const app=express();
const pinRoute= require("./routes/pins");
const userRoute=require("./routes/users");
dotenv.config();
app.use(cors());
app.use(express.json());
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("MongoDB Connected!");
})
.catch((err)=>console.log(err));


app.use("/api/pins",pinRoute);
app.use("/api/users",userRoute);

app.listen(8800,()=>{
    console.log("Port is running at 8800");
})