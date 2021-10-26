import axios from 'axios'

export const authenticateSignup = async (user) => {
    // axios is asynchronous call 
    try {
        return await axios.post('/signup', user)
    }
    catch (error) {
        console.log("Error while calling Signup API")
    }
}
export const authenticateLogin = async (user) => {
    try {
        return await axios.post('/login', user)
    }
    catch (error) {
        console.log("Error while calling LogIn API")
    }
}