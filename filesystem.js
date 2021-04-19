
let fs = require('fs');
let data=fs.readFileSync('abc.txt');
console.log(data.toString());

 //fs.mkdirSync('Other');
console.log(fs.existsSync('abc.txt'));
let wdata = 'This is some demo data that i want to write';
fs.writeFileSync('write.txt',wdata);

fs.appendFileSync('write.txt','this is append data');
//fs.unlinkSync('write.txt');