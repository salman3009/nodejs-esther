const express = require('express');
const router = express.Router();
const productController = require('../controller/product');
const validationMiddleware = require('../middlewares/validation');


router.get('',productController.getListController);
router.post('',validationMiddleware,productController.postListController);

module.exports = router;