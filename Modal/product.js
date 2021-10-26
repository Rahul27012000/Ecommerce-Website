import mongoose from 'mongoose';

const product = new mongoose.Schema({
    id: String,
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    description: String,
    discount: String,
    tagline: String
})

const products = mongoose.model('product', product)
export default products;