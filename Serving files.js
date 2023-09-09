const http=require('http')
const fs=require('fs');
const { hostname } = require('os');

const fileContent=fs.readFileSync('demo.html');

const server= http.createServer((req,res)=>{
    res.writeHead(200,
    {'content-type':'text/html'}
        );
    res.end(fileContent)
})
server.listen(port,hostname,()=>{
    console.log(`Server is listening at http://${hostname}:${port}/`);
});

// server.listen(80,'127.0.0.1',()=>{
//     console.log("listening on port 80", )
// })

//80 port means automaticaly srver will recognize the path