
// This app.js is for the express folder 

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());

app.use('/add-product',(req, res, next)=> {

    res.send("<form action='/product' method='POST'><label>Enter the Product</label><br><input type='text' name='title' placeholder='Enter something'><br><br><label>Enter the size of the product</label><br><input type='number' name='size' placeholder='Enter the size'><br><br><button type='submit' >Submit</button></form>");

})

app.use('/product',(req, res, next)=>{

    console.log(req.body);
    res.redirect('/');
});

app.use('/',(req, res, next)=> {

    
    res.send("<h1>Hello from Express</h1>");

})

app.listen(4000);