const http = require('http');


const server = http.createServer((req,res)=>{

    //check condition for post method
    if(req.method === 'POST'){
       
        //use inbuilt event emitter for incoming request
        req.on('data',(chunks)=>{
            //access the data in the form of buffer
            let result = Buffer.from(chunks);
            //conver buffer to unicode character
            result = result.toString();
            //convert string to object
            result = JSON.parse(result);
            console.log(result);
            res.writeHead(200,{'Content-Type':'text/plain'});
            res.end("finally post method");

        })
    }
})


server.listen(3000,()=>{
    console.log('server is running on 3000');
})