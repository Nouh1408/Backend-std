const fs = require("node:fs")
/**
 * read (readFileSync - readFile - read)
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
/* const data = fs.readFileSync("./data.json", {encoding:"utf-8"} )
console.log(JSON.parse(data)); */
let Fname = "Ahmed"
let Lname = "Nouh"
fs.writeFile("./data.txt", ` Hello i am ${Fname} ${Lname}`,{flag:"a"},(err)=>{  //teh HelloWorld is the data not sent as a parameter unlike readFile
    err && console.log(err.message);
    
})
