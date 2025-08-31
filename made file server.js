const http = require('http')
const fs = require("fs")
// there is file serve
const fileContant = fs.readFileSync('')

const server = http.createServer((req ,res)=> {
    res.writeHead(200,{'Contant-type': ('text/html')})
    res.end(fileContant)
})
server.listen(80, '127.0.0.1', ()=>{
    console.log("listing");
    
})