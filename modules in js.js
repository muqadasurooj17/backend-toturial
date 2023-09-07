const fs=require("fs");
const text=fs.readFileSync
("List of global variables.txt","utf-8");
console.log(text);