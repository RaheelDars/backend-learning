const express=require("express");
const app=express();

// app.use((req,res)=>{
//     console.log("Hi, I am  Middleware");
//     res.send("middleware fineshed")
    
// })

// app.use((req,res,next)=>{
//     req.time=Date.now()
//     // req.time=new Date(Date.now()).toString()
//     console.log(req.method,req.time);
//     next();
    
// })

app.use((req,res,next)=>{
    console.log("I am only for random");
    next();
    
})
app.use("/api",(req,res,next)=>{
    let {token}=req.query;
    if(token== "giveaccess"){
       next();
    }
    res.send("ACCESS DENIED")
    
})


app.get("/api",(req,res)=>{
    res.send("data")
})


app.listen(8080,()=>{
   console.log("server is listing to a port 8080");    
});
app.get("/",(req,res)=>{
    res.send("I am root")
    
})
app.get("/random",(req,res)=>{
    res.send("This is a random page")
    
})