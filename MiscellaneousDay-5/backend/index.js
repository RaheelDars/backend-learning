const express=require("express")
const app=express();
const port=8080;

app.use(express.urlencoded({extended:true}));


app.get("/register",(req,res)=>{
    let {user,password}=req.query
    res.send(`standard GET response.Wellcome ${user}`)
})

app.post("/register",(req,res)=>{
    // console.log(req.body);
    let {user,password}=req.body 

    res.send(`standard POST response.Wellcome ${user}`)
})
app.listen(port,()=>{
     console.log(`listening to port ${port}`);
     
})
