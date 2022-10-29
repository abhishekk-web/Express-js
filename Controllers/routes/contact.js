const express = require('express');
const path= require('path');

const contactController = require('../controllers/product');

const router = express.Router();

router.get("/contact", contactController.getContact);

router.post("/success", contactController.postContact);


module.exports = router;