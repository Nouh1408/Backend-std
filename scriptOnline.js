/* const os = require("node:os"); // Import Node's built-in OS module
let freeMemory = os.freemem()/1024**3; // Get the amount of free system memory in bytes
console.log(freeMemory);
let totalMemory = os.free
 */
const fs = require("node:fs")
const writeStream = fs.createWriteStream("./data-copy.txt");
const readStream = fs.createReadStream("./data.txt")
readStream.on("data",(chunk)=>{
    writeStream.write(chunk)
})
readStream.on('end',()=>{
    writeStream.end()
})