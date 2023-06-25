const express = require('express');
const router = express.Router();


const {
    createProduct
} = require('../controller/product');

const {verifyAuthToken} = require('../middlewares/auth');


router.post('/create',verifyAuthToken,createProduct);

module.exports = router;