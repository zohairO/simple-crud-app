const express = require("express")
const Procut = require("../models/product_model")
const router = express.Router()
const productController = require('../controllers/product.controller')

router.get('/', productController.getProducts)
router.get('/:id', productController.getProductWithId)
router.post('/', productController.createProduct)
router.put('/:id', productController.updateProduct)
router.delete('/:id', productController.deleteProduct)


module.exports = router