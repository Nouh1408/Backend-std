const fs = require("node:fs")
const {pipeline, Transform} = require("node:stream")
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
/* let Fname = "Ahmed"
let Lname = "Nouh"
fs.writeFile("./data.txt", ` Hello i am ${Fname} ${Lname}`,{flag:"a"},(err)=>{  //teh HelloWorld is the data not sent as a parameter unlike readFile
    err && console.log(err.message);
    
})
 */
/* try{
    let oldData = fs.readFileSync("./data.json", {encoding:"utf-8"})
    let newData = {name:"NOUH", salary:30000}
    oldData = JSON.parse(oldData)
    oldData.push(newData)
    
    fs.writeFileSync("./data.json", JSON.stringify(oldData)) //{flag:"a"}not prefered as it brings the new data beside array in JSON file
} catch(err){
    console.error(err.message);
} */


  //to delete data of data.txt
  //   fs.writeFileSync("./data.txt", "Ahmed")  

/* 
  try{
    fs.writeFileSync("./data.json", JSON.stringify([]))
  } catch(err){
    console.log(err.message);
    
  } */
//  fs.writeFileSync("./Hambozo.txt", "TESTin") //create the file if not exist
// fs.unlinkSync("Hambozo.txt") //removes the file permenantly throws error if file does not exist
// fs.existsSync() //returns boolean checks if the file exist ir not

//mkdirSync makes a directory in the system we use recursive true to idk while rmdirsync used to delet a folder with all subfolders if recursive true   
/* try{
    // fs.mkdirSync("./attachments/profile/text.text",{recursive:true})
    fs.rmdirSync("./attachments", {recursive:true}) //use rmdir since rmdirsync will be depreecated
} catch(error){
    console.log(error.message);
    
}
 */
/* const {EventEmitter} = require("node:events")
const readstream = fs.createReadStream("./test.txt",{
    highWaterMark:64*1024, //size of bytes that will be taken from stream
    encoding:'utf-8',
    start:3,
    end:1000
    //there is a autoclause which i have must close it using readstream.close() in setTimeout
    //emitClose by default is true if false it dosn't show in the Terminal that it is closed like text
}) //set buffer to 64kb
readstream.on("open",()=>{
    console.log("file is opened");
    
})
readstream.on("ready",()=>{
    console.log("fiel is ready ");
    
})
readstream.on("data", (chunk)=>{ //the eventstream every time it has ready data it sends it 
 console.log('==================================');
 console.log('==================================');
 console.log(chunk);
 readstream.pause()
 setTimeout(() => {
    readstream.resume()
 }, 1000);
 
 
})
readstream.on('end',()=>{ //this is not the end u still need to close the file
    console.log("ended");
    
})

readstream.on("close", () =>{
    console.log("file closed");
    
})
readstream.on("pause", ()=>{
    console.log("file is paused");
    
})
readstream.on('resume', ()=>{
    console.log("file is resumed");

}) */
//////////////////////////////////////////////////////////////////
// 1 kb = 1024 byte



//copying data from a file to another 
/* const fs = require("node:fs")
const writeStream = fs.createWriteStream("./data-copy.txt");
const readStream = fs.createReadStream("./data.txt")
readStream.on("data",(chunk)=>{
    writeStream.write(chunk)
})
readStream.on('end',()=>{
    writeStream.end()
})
    //easier implementation
    const readStream = fs.createReadStream("./data.txt")
const writeStream = fs.createWriteStream("./data-copy.txt")
readStream.pipe(writeStream)
 */

/* const readStream = fs.createReadStream("./data.txt")
const writeStream = fs.createWriteStream("./data-copy.txt")

const transform = new Transform({
    transform: (chunk,encoding,cb)=>{
        chunk = chunk.toString()
        chunk = chunk.toUpperCase()
        cb(null, chunk)
    }

})
pipeline(readStream,transform, writeStream, (err)=>{
    if(err){
        console.log(err);
    } else{

    }
}) */
/*********************************http*********************************************/

const http =require("node:http") //when deploy https //object from core module
const server =http.createServer((req, res)=>{
    // console.log(req);//object
    const {url, method} = req
    console.log({url,method});
    if(url=="/product" && method=="GET"){
        // console.log("Productsdfd");
        res.write("produts")
        res.end()
        
    } else if(url=="/product" && method=="POST"){
        console.log("add Product");
        
    } 
    else{
        console.log("Invalid Routing");
        
    }
    
    
})//returns a new instance server (object)
server.listen(3000,()=>{
    console.log("Server running on port ",3000); //GET by dEfault Front-end controls the form and chooses the method
    
})





