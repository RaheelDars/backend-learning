const express=require("express")
const app=express()

const port=8080

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
    
})

app.set("view engine", "ejs");

app.get("/",(req,res)=>{
    // res.send("this is root")
    res.render("home.ejs")
})

// nodemon ExpressDay-3/index.js (Sever ko asa b start kren sakta hain parent folder k sath)

//RollDice

// app.get("/rolldice",(req,res)=>{
//      res.render("rolldice.ejs")
// })

//                       Or

app.get("/rolldice", (req, res) => {
    let diceValue = Math.floor(Math.random() * 6) + 1;
    
    // Backend se num pass kar rahe hain
    res.render("rolldice", { num: diceValue }); 
});

//for Instagram
app.get("/ig/:username",(req,res)=>{
    let {username}=req.params
    // console.log(username);
    const followers=["Ali","dani","Abdullah","Inshal"]
    res.render("instagram.ejs",{username,followers})
    
})

