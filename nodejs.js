const path = require("path");
const fs = require("fs")
console.log(`${path.basename(__filename)}`)
console.log(process.pid)
console.log(process.version.node)
console.log(process.argv)
//argv are arguments we pass from console
//node nodejs swati bajpai (argv[0]= swati , argv[1]=bajpai, )
const[, ,firstname, lastname]=process.argv;
console.log(`your name is ${firstname} ${lastname}`)

process.stdout.write("what is your name ")
//data is from console
process.stdin.on("data", data =>{
    process.stdout.write(`${data.toString().trim()}`)
    //clear lastline
    process.stdout.clearLine();
    process.stdout.cursorTo(0)
    process.exit();
})
fs.readdir("./backend/models", (err, files) =>{
    if(err){
        throw err;

    }
    console.log(files)
})
fs.readFile("./backend/models/orderModel.js","UTF-8", (err, text) =>{
    if(err){
        throw err;

    }
    console.log(text)
})
const md =`this is new file`
fs.writeFile("./frontend/public/notes.md", md.trim(),err=>{
    if(err){
        throw err;

    }
    console.log("done")
})
fs.mkdir("storage-files", err =>{
    if(err){
        throw err;

    }
    console.log("directory created")
})
fs.appendFile("./frontend/public/notes.md","i m good",err =>{
    if(err){
        throw err;

    }
    console.log("append file")
})
fs.rename()
fs.unlink()
fs.rmdir()
//deletedir
fs.readFileSync("./storage").forEach(filename =>{
    fs.unlinkSync(`./storage/${filename}`)

})
//create child process with exec
const cp = require("child_process")
// cp.exec("open http://google.com")
cp.exec("open http://www.google.com")
cp.exec("open -a Terminal")
cp.exec("ls",(err,data,stderr) => {
    if(err){
        throw err;
    }
    console.log(stderr)
    console.log(data)
})
const qa = cp.spawn("node", ["ques.js"])