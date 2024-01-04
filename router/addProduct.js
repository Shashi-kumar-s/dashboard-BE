const express = require('express');
const router = express.Router();
const addProduct = require('../controller/addProduct');

router.post('/addProduct', addProduct.addProduct);
router.get('/getAllProduct', addProduct.getAllProduct);
router.delete('/deleteProductById/:id', addProduct.deleteProductById);
router.get('/getSingleProductData/:id', addProduct.getSingleProductById);
router.put('/updateSingleProductDataById/:id', addProduct.updateSingleProductDataById);
module.exports = router; 