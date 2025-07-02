const express = require("express");
const app = express();
const port = 3000;
const mysql = require("mysql2");

const dbConnection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "retail",
});
dbConnection.connect((err) => {
  if (err) {
    console.log("Failed to connect to databnase", err.message);
  } else {
    console.log("Conneted to databse", dbConnection.config.database);
  }
});

//add a column category to products
const alterTable = `ALTER TABLE products ADD COLUMN category VARCHAR(255)`;
dbConnection.query(alterTable, (err, result) => {
  if (err) {
    return;
  } else {
    console.log("Column added Successfully");
  }
});
//remove category
const removeColumn = `ALTER TABLE products DROP COLUMN category`;
dbConnection.query(removeColumn, (err, result) => {
  if (err) {
    console.log("Failed to remove column");
  } else {
    console.log("Column removed");
  }
});
//change ContactNumber
const changeContact = `ALTER TABLE suppliers MODIFY COLUMN ContactNumber  varchar(15)`;
dbConnection.query(changeContact, (err, result) => {
  if (err) {
    console.log("disn't update constraint");
  } else {
    console.log("Constraint Updated");
  }
});
//add not NULL
const addNull = `ALTER TABLE products MODIFY COLUMN ProductName VARCHAR(255) NOT NULL`;
dbConnection.query(addNull, (err, result) => {
  if (err) {
    console.log("Null wasn't added");
  } else {
    console.log("Null added");
  }
});
//add a supplier
app.use(express.json());
app.post("/table", (req, res, next) => {
    const { SupplierName, ContactNumber } = req.body;
    // console.log({SupplierName,ContactNumber});
    
  const addSuplier = `INSERT INTO suppliers (SupplierName, ContactNumber) VALUES(?,?)`;
  dbConnection.execute(
    addSuplier,
    [SupplierName, ContactNumber],
    (err, result) => {
      if (err) {
      console.error("Failed to add supplier:", err.message);
      res.status(500).send("Failed to add supplier");
    } else {
      console.log("Supplier added");
      res.status(200).send("Supplier added successfully");
    }
    }
  );
});
app.post("/insertProducts", (req, res, next) => {
  const { ProductName, Price, StockQuantity } = req.body;
  
  const query = `INSERT INTO products (ProductName, Price, StockQuantity) VALUES (?, ?, ?)`;
 // i sended the data one by one
  dbConnection.execute(
    query,
    [ProductName, Price, StockQuantity],
    (err, result) => {
      if (err) {
        console.log("Failed to add data:", err.message);
        res.status(500).send("Failed to add data");
      } else {
        console.log("Data added");
        res.status(200).send("Values added");
      }
    }
  );
});


app.listen(port, () => {
  console.log("app is running on port", port);
});
