
// This app.js is for the express folder 

const express = require('express');

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contact');

const path = require("path");

const bodyParser = require('body-parser');
const { application } = require('express');

const app = express();

app.use(bodyParser.urlencoded()); //{extended: true}
// app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'public')));

app.use(shopRoutes);
app.use('/admin',adminRoutes);
app.use(contactRoutes);

app.use((req, res, next)=>{

    res.status(404).sendFile(path.join(__dirname,'views', 'notFound.html'));

});


app.listen(4000);