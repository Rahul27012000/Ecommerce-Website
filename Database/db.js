import mongoose from 'mongoose'

const Connection = async (url) => {
    
    
    try {
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true});
        console.log("Database Connected!")
    } catch (error) {
        console.log('Error is:', error.message)
    }

}

export default Connection;