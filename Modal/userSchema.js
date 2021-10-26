import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
    firstname:
    {
        type: String,
        required: true,
        trim: true,
        min: 5,
        max: 15
    },
    lastname:
    {
        type: String,
        required: true,
        trim: true,
        min: 5,
        max: 15
    },

    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,

    },
    phone: {
        type: String,

    }

});

const User=mongoose.model('user',userSchema);
export default User;