const Product = require("../models/product_model")

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json({ products })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const getProductWithId = async (req, res) => {
    try {
        // we want to retreive the product with the id 
        const id = req.params.id
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (err) {
        res.status(500).json({ messgae: err.message })
    }
}

const createProduct = async (req, res) => {
    try {
        // we use await and async because this is a process that can take a while 
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const updateProduct = async (req, res) => {
    try {
        const id = req.params.id

        // This line will update the product 
        const product = await Product.findByIdAndUpdate(id, req.body)

        // check to see if the product exists 
        if (!product) {
            return res.status(404).json({ message: "product not found" })
        }

        const updatedProd = await Product.findById(id)
        res.status(200).json(updatedProd)


    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}


const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        if (!product) {
            return res.status(404).json({ message: "product not found" })
        }

        res.status(200).json({ message: "deleted successfully" })

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports = {
    getProducts,
    getProductWithId,
    createProduct,
    updateProduct,
    deleteProduct
}