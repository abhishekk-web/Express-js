
// This app.js is for the express folder 

const express = require('express');

const app = express();

app.use((req, res, next)=>{

    console.log("In the middleware");
    next();

})

app.use((req, res, next)=> {

    console.log("in the second middleware");
    res.send("<h1>Hello world</h1>");

})

app.listen(4000);