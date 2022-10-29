const  express = require('express');
const path = require('path');

const rootDir = require("../util/path");

const router = express.Router();



router.get('/add-product',(req, res, next)=> {

    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    //res.send("<form action='/admin/add-product' method='POST'><label>Enter the Product</label><br><input type='text' name='title' placeholder='Enter something'><br><br><label>Enter the size of the product</label><br><input type='number' name='size' placeholder='Enter the size'><br><br><button type='submit' >Submit</button></form>");

})

router.post('/add-product',(req, res, next)=>{

    console.log(req.body);
    res.redirect('/');
});

router.get('/shop',(req, res, next)=>{

    res.redirect('/shop');

})

module.exports = router;