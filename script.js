const fs = require("node:fs")
/**
 * read
 * write
 * create
 * update
 * remove
 * 
 */
/* fs.readFile("./data.json","utf-8",(err,data)=> { 
    if(err){
        console.log(err.message);
    }
    
    console.log(JSON.parse(data));
    
}) */
const data = fs.readFileSync("./data.json", {encoding:"utf-8"})
console.log(JSON.parse(data));

