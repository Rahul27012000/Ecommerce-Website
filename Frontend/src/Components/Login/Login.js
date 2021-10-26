import { Dialog, DialogContent, makeStyles, TextField, Typography, Button } from '@material-ui/core'
import { Box } from '@material-ui/core';
import { useState } from 'react';
import { authenticateSignup ,authenticateLogin} from '../../Service/api.js';

const useStyles = makeStyles({
    component: {
        height: '80vh',
        width: '90vh',
        overflow: 'hidden'
    },
    image: {
        backgroundImage: `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        height: '80vh',
        backgroundRepeat: 'no-repeat',
        backgroundColor: "#2874f0",
        width: '40%',
        backgroundPosition: 'center 85%',
        padding: '45px 35px',
        '& > *': {
            color: "#fff",
            fontWeight: 600
        }
    },
    login: {
        padding: '25px 35px',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        '&>*': {
            marginTop: 12
        }
    },
    text: {
        color: '#878787',
        fontSize: 12
    },
    loginBtn: {
        textTransform: 'none',
        background: "#fb641b",
        color: "#fff",
        height: 48,
        borderRadius: 2
    },
    rqbtn: {
        textTransform: 'none',
        background: "#fff",
        color: "#2874f0",
        height: 48,
        borderRadius: 2,
        boxShadow: '0 2px 4px 0 rgb(0 0 0 /20%)'
    },
    createtext: {
        textAlign: 'center',
        marginTop: 'auto',
        fontSize: 14,
        color: "#2874f0",
        fontWeight: 600,
        cursor: 'pointer'
    },
    error:{
        color:'#ff6161',
        fontSize:10,
        marginTop:10,
        lineHeight:0,
        fontWeight:600,

    }
})

const initialvalue = {
    login: {
        view: 'login',
        heading: 'Login',
        subheading: 'Get access to your Orders,Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: 'Looks like you\'re new here',
        subheading: 'Sign up with your mobile number to get started'
    }
}

const signupinitialvalues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
}

const logininitialvalues={
    username:'',
    password:''
}

const Login = ({ open, setopen ,setAccount}) => {
    const classes = useStyles();
    const [account, toggleAccount] = useState(initialvalue.login);
    const [signup, setsignup] = useState(signupinitialvalues);
    const [login,setlogin]=useState(logininitialvalues);
    const [error,seterror]=useState(false);

    const handleClose = () => {
        setopen(false);
        toggleAccount(initialvalue.login)
    }
    const signupuser = async () => {
        let resp = await authenticateSignup(signup);
        if (!resp) return;
        handleClose();
        setAccount(signup.username)
    }
    const loginuser=async()=>{
        let resp=await authenticateLogin(login);
        if (!resp){
            seterror(true);
            return;
        }
        handleClose();
        setAccount(login.username)
    }
    const toggleuseraccount = () => {
        toggleAccount(initialvalue.signup);
    }

    const onInputChange = (e) => {
        setsignup({
            ...signup,
            [e.target.name]: e.target.value
        })
    }

    const onvalueChange=(e)=>{
        setlogin({
            ...login,
            [e.target.name]:e.target.value
        })
    }
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogContent className={classes.component}>
                <Box style={{ display: "flex" }}>
                    <Box className={classes.image}>
                        <Typography variant="h5">{account.heading}</Typography>
                        <Typography style={{ marginTop: "20px" }}>{account.subheading}</Typography>
                    </Box>
                    {
                        account.view === 'login' ?
                            <Box className={classes.login}>
                                <TextField name='username' label='Enter Email/Mobile number' onChange={(e) => onvalueChange(e)} />
                                <TextField name='password' label='Enter Password' onChange={(e) => onvalueChange(e)}/>
                                {
                                    error && <Typography className={classes.error}>Invalid Username & Password</Typography>
                                }
                                <Typography className={classes.text}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                                <Button variant="contained" className={classes.loginBtn} onClick={() => loginuser()} >Login</Button>
                                <Typography style={{ textAlign: 'center' }} className={classes.text}>OR</Typography>
                                <Button variant="contained" className={classes.rqbtn}>Request OTP</Button>
                                <Typography onClick={() => toggleuseraccount()} className={classes.createtext}>New to Flipkart? Create an account</Typography>
                            </Box> :
                            <Box className={classes.login}>
                                <TextField name='firstname' label='Enter FirstName' onChange={(e) => onInputChange(e)} />
                                <TextField name='lastname' label='Enter LastName' onChange={(e) => onInputChange(e)} />
                                <TextField name='username' label='Enter UserName' onChange={(e) => onInputChange(e)} />
                                <TextField name='email' label='Enter Email' onChange={(e) => onInputChange(e)} />
                                <TextField name='password' label='Enter Password' onChange={(e) => onInputChange(e)} />
                                <TextField name='phone' label='Enter Mobile number' onChange={(e) => onInputChange(e)} />

                                <Button variant="contained" className={classes.loginBtn} onClick={() => signupuser()}>Signup</Button>
                            </Box>
                    }

                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default Login;