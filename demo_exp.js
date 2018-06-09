const exp = require("express");
const hbs = require("hbs");
let oApp = exp();

// add hbs view engine to express
oApp.set('view engine','hbs');

oApp.use((req,res,next) =>{
  console.log(req);
  res.render('index.hbs',{
    variable1: 'Demo Server',
    variable2: 'Variable2'
  });
  next();
});
// oApp.get('/',(req,res) => {
// //  res.send("hi this is test");
// //load html for response
// res.render('index.hbs',{
//   variable1: 'Demo Server',
//   variable2: 'Variable2'
// });
// });

//event emitter

oApp.listen(100);
