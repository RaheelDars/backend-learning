const mongoose = require('mongoose');
//Conection 
main().then(()=>{
    console.log("connection sucessful");
    
})
.catch(err => console.log(err));

async function main() {
     await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
//UserSchema
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number
})
//Model ha ya 
const User=mongoose.model("User", userSchema);

// const user1=new User({
//     name:"Ali",
//     email:"ali@gmail.com",
//     age:21,
// })
// user1.save().then(res=>{
//     console.log(res);
    
// });
// const user2=new User({
//     name:"dani",
//     email:"dani@gmail.com",
//     age:23,
// })
// user2.save().then(res=>{
//     console.log(res);
    
// });
// User.insertMany([
//     {name:"Abdullah",email:"abdullah@gmail.com",age:22},
//     {name:"raheel",email:"raheel@gmail.com",age:20},
//     {name:"inshal",email:"inshal@gmail.com",age:25},
// ]).then(res=>{
//     console.log(res);
    
// })
// User.find({}).then((res)=>{
//     console.log(res);
    
// }).catch((err)=>{
//     console.log(err);
// })

// User.find({age:{$gt:22}}).then((res)=>{
//     console.log(res);
    
// }).catch((err)=>{
//     console.log(err);
    
// })
// User.find({age:{$gt:23}}).then((res)=>{
//     console.log(res[0].name);
    
// }).catch((err)=>{
//     console.log(err);
    
// })
// User.findOne({age:{$gt:22}}).then((res)=>{
//     console.log(res);
    
// }).catch((err)=>{
//     console.log(err);
    
// })

// User.updateOne({name:"dani"},{age:24}).then((res)=>{
//     console.log(res);
    
// }).catch((err)=>{
//      console.log(err);
     
// })

// User.findOneAndUpdate({name:"raheel"},{age: 18}).then((res)=>{
//     console.log(res);   
    
// }).catch((err)=>{
//     console.log(err);
// })

// User.findOneAndUpdate({name:"raheel"},{age: 18},{new:true}).then((res)=>{
//     console.log(res);   //{new:true} ya direct show krna k liya use krta hain
    
// }).catch((err)=>{
//     console.log(err);
    
// })

