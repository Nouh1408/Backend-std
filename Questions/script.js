//Question: Modify the code to write "Hello, Stream!" to a file called output.txt and log "File saved!" when done.
const fs = require("node:fs")
const writeStream = fs.createWriteStream("./output.txt")
writeStream.write("Hello, Stream")
writeStream.end()
writeStream.on('finish',()=>{
    console.log("File Saved!");
})
//Question: Extend the previous example to handle errors (e.g., if the file can’t be written).
writeStream.on('error', (err)=>{
    console.log("error: ", err);
    
})
