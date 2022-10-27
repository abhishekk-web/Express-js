const express = require('express');

const router = express.Router();

router.get('/',(req, res, next)=> {

    
    res.send("<h1>Hello from Express</h1>");

})

router.get("/shop",(req, res, next)=>{

    res.send('<h1>This is the shop page</h1>');

})


module.exports = router;