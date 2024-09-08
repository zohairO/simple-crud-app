const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product_model.js')
const productRoute = require('./routers/product.route.js')
const app = express()

// middleware
app.use(express.json())     // This is a middleware that handles incoming JSON requests 
app.use(express.urlencoded({extended: false}))

// routes
app.use("/api/products", productRoute)


// This is a default page as indicated by the url '/'
app.get('/', (req,res) => {
    res.send('Hello from the home page')
})



// connnecting to the database first, then booting the server
mongoose.connect('mongodb+srv://zohomata12:RKba6K7vkeuVpUNx@backenddb.jeu6v.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB')
.then(() => {
    console.log("Connected!")
    // server will only run when the promise is returned 
    app.listen(3000, () => {
        console.log('Server is running on port 3000...')
    })    
})    
.catch((err) => {
    console.error("Error connecting to mongoDB:", err)
})      

//
