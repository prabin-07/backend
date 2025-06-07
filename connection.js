const mongoose=require("mongoose");
mongoose.connect('').then((res)=>{
    console.log("DB is connected")
}).catch((res)=>{
    console.log("DB is not connected")
})