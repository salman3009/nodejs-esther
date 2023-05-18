const http = require('http');

//creating the server
const server = http.createServer((request,response)=>{
    //sending the response
    response.writeHead(200,{'Content-Type':'text/html'});
    response.end("<h1>Welcome to html</h1>");
});

server.listen(3000,()=>{
    console.log("server is running on 3000");
})

