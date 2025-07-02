const express = require("express");
const app = express();
const port = 3000;
const mysql = require("mysql2");

//createConnection returns an instance so we store it in a variable
const dbConnection = mysql.createConnection({
  host: "127.0.0.1", //or localhost when used with a real server host: "192.168.1.100"
  port: 3306,
  user: "root",
  password: "",
  database: "uber",
});

dbConnection.connect((err) => {
  if (err) {
    console.log("Failed to conncet to Database", err.message);
  } else {
    console.log("Connected to database", dbConnection.config.database);
  }
});
//builtin middleware express.JSON() which parses the body which comes from raw JSON
app.use(express.json());
//API create user
app.post("/user", (req, res, next) => {
  const { name, email, password } = req.body;
  // console.log({name, email,password });
  //prepare query to execute in db
  let query = `INSERT INTO drivers (name,email,password) VALUES("${name}","${email}","${password}")`;
  dbConnection.execute(query, (error, result) => {
    if (error) {
        if(error.errno ===1062){
            return res.status(409).json({message:"User Already Exist", success:false})
        }
      return res.status(500).json({ message: "Server Error", err });
    }
    if (result.affectedRows == 0) {
      return res
        .status(500)
        .json({ message: "Fail to create user", success: false });
    }
    return res
      .status(201)
      .json({
        message: "User created Successfully ",
        success: true,
        userID: result.insertId,
      });
  });
});

app.listen(port, () => {
  console.log("app is running on port ", port);
});
