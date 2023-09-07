//console.log("hello world");

const http = require('http');
 
const hostname = '127.0.0.1';
const port = 3000;
 
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
//REPL:READ EVLUATE PRINT LOOP
// .exit to exit node terminal
//.node to strart node termail
//_ means previous value in node