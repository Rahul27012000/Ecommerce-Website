import { products } from './Constants/product.js'
import Product from './Modal/product.js'

const DefaultData = async () => {
  try { 
    await Product.deleteMany({}) //old objects will be deleted
    await Product.insertMany(products);
    console.log("Data Imported Successfully!")
  }
  catch (error) {
    console.log('Error is:', error.message)
  }
}

export default DefaultData;