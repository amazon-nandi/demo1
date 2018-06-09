//console.log(module);
const lcl = require("./add");
const _ = require("lodash");
const yargs = require("yargs");
//console.log(lcl);

let ladd = lcl.add('1',2);
//console.log(ladd);
ladd = lcl.sub(`${ladd}`,2);
//console.log(ladd);
let x = 1,uid;

do {

  x++;
  uid = _.uniqueId();
//  console.log(uid);
} while ( x < 10);

// using yargs for inputs from command line

console.log(process.argv);
console.log(yargs.argv);
debugger;
if ( process.argv[2] === 'test') {
console.log(yargs.argv.x + 'fetch first argument');
} else if (process.argv[2] === 'test2') {
console.log(yargs.argv.y + 'fetch second argument');
}else {
console.log( yargs.argv.x+yargs.argv.y + 'Summ of Arg X & Y');
}

let vJson = {
 SO: 1,
 PO: {

   PO1 :1234,
 },

};

// console.log(JSON.stringify(vJson));
// console.log(vJson["PO"]["PO1"]);
let v1=[];
v1.push(vJson);
v1.filter( (v) => {
  console.log(v);
} );
