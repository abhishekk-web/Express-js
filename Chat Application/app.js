const express = require('express');

const app = express();



const bodyParser = require('body-parser');

const login = require('./routes/login');
const message = require('./routes/message');

app.use(bodyParser.urlencoded({extended: true}));

app.use(login);
app.use(message);

app.use((req, res, next)=>{

    res.status(404).send('<h1>Page not found</h1>')

});



app.listen(3000);