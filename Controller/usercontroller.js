import User from '../Modal/userSchema.js'

export const userSignup = async (req, res) => {
    try {
        const exist=await User.findOne({username:req.body.username})
        if(exist){
            return res.status('401').json({message:'User Already Exist :('})
        }
        const user = req.body;
        const newUser=new User(user);
        await newUser.save();
        res.status('200').json({message:'User is Successfuly Registered'})
    }
    catch (error) {
        console.log("Error: ", error.message)
    }
    
}

export const userlogin =async(req,res)=>{
    try{
       let user=await User.findOne({username:req.body.username,password:req.body.password});
       if(user){
        return res.status('200').json(`${req.body.username} Login Successfull`)
       }
       else{
        return res.status('401').json({message:'Invalid LogIn :('})
       }

    }
    catch (error) {
        console.log("Error: ", error.message)
    }
}
