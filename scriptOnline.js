/* const os = require("node:os"); // Import Node's built-in OS module
let freeMemory = os.freemem()/1024**3; // Get the amount of free system memory in bytes
console.log(freeMemory);
let totalMemory = os.free
 */
const http =require("node:http")
const port =3000
const server = http.createServer((req,res,next)=>{
    
})