const mongoose  = require("mongoose");


mongoose.connect("mongodb://localhost:27017/student-Apis-learn", 
{
useNewUrlParser:true}
).then(()=>{
    console.log("Mongodb connected ")}
    ).catch((err)=>{
    console.log(err)
})