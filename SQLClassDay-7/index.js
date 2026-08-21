import { faker } from "@faker-js/faker";
import mysql from "mysql2";
import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';

// 1. ES Modules me __dirname set karne ka tariqa
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// let getRandomUser = () => {
//     return {
//         id: faker.string.uuid(),
//         username: faker.internet.userName(),
//         email: faker.internet.email(),
//         password: faker.internet.password(),
//     };
// };
// //sql2 ka kam ha
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app", // name aya gh database ka
  password: "Maju2k23@",
});
// //connection Object
// //singel user
// // let user=["123","123_newuser","abc@gmail.com","abc"]
// // let q="INSERT INTO user(id, username,email, password) VALUES(?, ?, ?, ?)";

// //multiple user
// let q="INSERT INTO user(id, username,email, password) VALUES?";
// let users=[["123b","123_newuserb","abc@gmail.comb","abcb"],["123c","123_newuserc","abc@gmail.comc","abcc"]]

// try {

// connection.query(q,[users], (err, result) => {
//         if (err) throw err;
//         console.log(result);
//     });
// } catch (err) {

//     console.log(err);
// }
// connection.end()  // to end connection

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// let q="INSERT INTO user(id, username,email, password) VALUES ?";

// let data=[]
// for(let i=1;i<=100;i++){
//     // console.log(getRandomUser());
//     data.push(getRandomUser())

// }
// try {

// connection.query(q,[data], (err, result) => {
//         if (err) throw err;
//         console.log(result);
//     });
// } catch (err) {

//     console.log(err);
// }
// connection.end()  // to end connection

// Basic Route
app.listen("8080", () => {
  console.log("Server is listening to port 8080");
});
// Server Listening
app.get("/", (req, res) => {
  let q = "SELECT count(*) FROM user";
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
    //   console.log(result);
    //   res.send(result)
    let count=result[0]["count(*)"]
    res.render("home.ejs",{count})
    });
  } catch (err) {
    console.log(err);
    res.send("Some error in database")
  }
//   res.send("wellcome to home page");
});
