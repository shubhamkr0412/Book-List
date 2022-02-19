//pM5bfCo7JmV8yAqD
const express=require ('express');
const mongoose=require("mongoose");
const router=require("./routes/bookroute");
const app =express();
app.use(express.json());

mongoose.connect("mongodb+srv://admin:pM5bfCo7JmV8yAqD@cluster0.f5kt4.mongodb.net/BookList?retryWrites=true&w=majority").then(()=>console.log("Connected to database")).then(()=>{
    app.listen(5000);
}).catch((err)=>console.log(err));
app.use("/books",router);