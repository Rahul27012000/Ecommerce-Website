import Product from '../Modal/product.js'
export const getproducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.json(products)
    }
    catch (error) {
        console.log("Error: ", error.message)
    }
}

export const getprodbyid = async (req, res) => {
    try {
        const product=await Product.findOne({'id':req.params.id})
        res.json(product)
    }
    catch (error) {
        console.log("Error: ", error.message)
    }
}