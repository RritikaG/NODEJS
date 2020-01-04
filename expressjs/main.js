const express= require("express");
const app = express();
app.get("/",(req,res)=>{
    res.send("hello world");
});
// passing params
app.get("/rikku/:id",(req,res)=>{
    res.send("hello rikku  "+ req.params.id);
    console.log(req.params);

});
//when we may or may not want params 'using ?'
app.get("/users/:id?",(req,res)=>{
    if(req.params.id === undefined)
        res.send("all users")
    else
        res.send("user with id"+req.params.id);

});
//pattern url used for security
// will match acd and abcd
app.get('/ab?cd', function(req, res) {
    res.send('ab?cd');
});

// will match abcd, abbcd, abbbcd, and so on
app.get('/ab+cd', function(req, res) {
    res.send('ab+cd');
});

// will match abcd, abxcd, abRABDOMcd, ab123cd, and so on
app.get('/ab*cd', function(req, res) {
    res.send('ab*cd'+ 'parameter passed inbetween is'+req.params[0]);

});
app.get(/.*ikku$/, function(req, res) {
    res.send("heloooo");
});

// will match /abe and /abcde
app.get('/ab(cd)?e', function(req, res) {
    res.send('ab(cd)?e');
});


app.listen(3000,()=>console.log("server running"));
