const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        name: {
            type: String, 
            required: [true, "Product name is required"]
        },
        quantity: {
            type: Number, 
            required: true,
            default: 0         
        },
        price: {
            type: Number, 
            required: true,
            default: 0
        },
        image: {
            type: String, 
            required: false //not mandatory to provide image 
        }
    },
    {   
        // this will give us given and updated time stamp for the object 
        timestamps: true 
    }
)

const Product = mongoose.model("Product", productSchema)
module.exports = Product
