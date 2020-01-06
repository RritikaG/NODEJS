const http=require('http');
const express=require('express');
const app=new express();

var validation=function(req,res,next)
{
  console.log('middleware accessed');
  next(); // go  to main route
};
var validationforuser=function(req,res,next)
{
    console.log('middleware accessed for users');
    next(); // go  to main route
};
var validatename=function(req,res,next)
{
    if(req.params.username === 'rikku')
    console.log('user validated');
    else
        res.send("unathorizedd");
    next(); // go to defined route
};

//app.use(validation); // its working globally ....ie for all routes
app.get('/',validation,(req,res)=> {
    res.send("hello");
});
app.get('/users',validationforuser,(req,res)=> {
    res.send("hello userssss" );
});

app.get('/users/:username',validatename,(req,res)=> {
    res.send("hello userssss = " +req.params.username );
});

// middlewares can be accessed through external file also

// module.exports = function (options) {
//     return function (req, res, next) {
//         // Implement the middleware function based on the options object
//         next()
//     }
// }
// var mw = require('./my-middleware.js')
//
// app.use(mw({ option1: '1', option2: '2' }))

app.listen(3000,()=>console.log("server running"));

