const express=require("express")
const app=express()
console.dir(app)
let port=8080  //3000
app.listen(port, ()=>{
    console.log("app is listening port")
})

//app.use() sari ki sari Request ko listen krta hain
// app.use((req,res)=>{
//     // console.log(req);
//     console.log("Requesr received");
//     // res.send("this is a basic response")
//     // res.send({
//     //     name:"apple",
//     //     color:"Red"
//     // })
//     let code="<h1>Fruits</h1><ul><li>Apple</li><li>Orange</li><ul/>"
//     res.send(code)
// })

// app.get("/",(req,res)=>{
//     res.send("Hello, I am  root ")
// })
// app.get("/apple",(req,res)=>{
//     res.send("You contacted apple path")
// })
// app.get("/search",(req,res)=>{
//     res.send("You contacted search path")
// })
// // app.get("*",(req,res)=>{
// //     res.send("This path doest not exist")
// // })
// //Aghr koi error(404) na jaya to ya likh do
// app.get("/*splat", (req, res) => {
//     res.send("This path does not exist");
// });
// app.post("/",(req,res)=>{
//     res.send("U sent a post request")
// })


// app.get("/", (req,res)=>{
//     res.send("Hello, i am root")
// })
// app.get("/:username", (req,res)=>{ //"/:username" variable ha jisa instagram ka ha
//     console.log(req.params);//Parameter bata ha ham ko
    
//     res.send("Hello, i am root")
// })
// app.get("/:username", (req,res)=>{ //"/:username" variable ha jisa instagram ka ha
//     let{username,id}=req.params
    
//     res.send(`Wellcome to the page of @${username}`)
// })

app.get("/search",(req,res)=>{
    // console.log(req.query);
    let {q}=req.query
    res.send(`Search result for query: ${q}`)
    
})