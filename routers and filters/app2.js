
// This app.js is for the express folder 

const express = require('express');

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop');

const bodyParser = require('body-parser');
const { application } = require('express');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());

app.use(shopRoutes);
app.use('/admin',adminRoutes);

app.use((req, res, next)=>{

    res.status(404).send('<h1>Page not found</h1>')

});


app.listen(4000);