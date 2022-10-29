const express = require('express');
const path = require('path');

const rootDir = require('../util/path');


const router = express.Router();

router.get('/',(req, res, next)=> {

    res.sendFile(path.join(rootDir,'views', 'shop.html'));
    // res.send("<h1>Hello from Express</h1>");

})

router.get("/shop",(req, res, next)=>{

    res.sendFile(path.join(rootDir,'views', 'shop.html'));

})


module.exports = router;