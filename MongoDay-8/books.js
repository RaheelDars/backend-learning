const mongoose = require('mongoose');

//Eastblish Conection 
main().then(()=>{
    console.log("connection sucessful");
    
})
.catch(err => console.log(err));

async function main() {
     await mongoose.connect('mongodb://127.0.0.1:27017/amazon');

}

const bookSchema=new mongoose.Schema({
    // tiltle:String,
    // author:String,
    // price:Number,  
    //Or
     tiltle:{
        type:String,
        required:true
     }, 
    author:{
        type:String,
    },
    price:{
        type:Number,
    },

})

const Book= mongoose.model("Book",bookSchema)


let book1=new Book({
    tiltle:"Mathamatics X",
    author:"RD",
    price:1000

})
book1.save().then((res)=>{
    console.log(res);
    
}).catch((err)=>{
    console.log(err);
    
})