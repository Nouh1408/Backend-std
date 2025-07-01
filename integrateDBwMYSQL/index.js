const express = require("express")
const app = express()
const port =3000
const mysql =require("mysql2")

//createConnection returns an instance so we store it in a variable
const dbConnection = mysql.createConnection({
    host:"127.0.0.1", //or localhost when used with a real server host: "192.168.1.100"
    port:3306,
    user:"root",
    password:"",
    database:"uber"
})

dbConnection.connect((err)=>{
    if(err){
        console.log("Failed to conncet to Database");
    
    } else{
        console.log("Connected to database", dbConnection.config.database);
        
    }
})
app.listen(port, ()=>{
    console.log("app is running on port ",port);
    
})