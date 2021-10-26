import { useState, useContext } from "react";
import { Box, Button, makeStyles, Typography, Badge } from "@material-ui/core"
import { ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom'
import Login from "../Login/Login.js";
import {LoginContext} from '../../Context/contextprovider.js'
import Profile from './Profile.js'
import {useSelector} from 'react-redux'
const useStyle = makeStyles(theme=>({
    login: {
        backgroundColor: '#FFF',
        color: "#2874f0",
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: 2,
        padding: '5px 40px',
        boxShadow: 'none',
        [theme.breakpoints.down('sm')]:{
            color: '#fff',
            backgroundColor: '#2874f0',
            marginRight:'auto',
            display:'flex',
            flexDirection:'column',
            marginTop:10
           
        }
    },
    wrapper: {
        margin: '0 5% 0 auto', 
        display: 'flex',
        // for child elements 
        '& > *': {
            marginRight: 50,
            alignItems: 'center',
            textDecoration: 'none',
            color: '#fff',
            [theme.breakpoints.down('sm')]:{
                color: '#2874f0',
            }
        },
        [theme.breakpoints.down('sm')]:{
            display:'block',
            margin: '0 5% 0 21%', 
        }
    },
    container: {
        display: 'flex',
        [theme.breakpoints.down('sm')]:{
            display:'block'
        }
    }

}))
const HeaderButtons = () => {
    const classes = useStyle();
    const [open, setopen] = useState(false);
    const { account, setAccount } = useContext(LoginContext);

    const {cartItems}=useSelector(state=>state.cart)

    const openLoginBox = () => {
        setopen(true);
    }
    return (
        <Box className={classes.wrapper}>
            {
                account ?
                    <Profile account={account} setAccount={setAccount}></Profile>:
                    <Link to="/"><Button variant="contained" onClick={openLoginBox} className={classes.login} >Login</Button></Link>
            }

            <Typography style={{ marginTop: 5 }}>More</Typography>
            <Link to="/cart" className={classes.container}>
                <Badge badgeContent={cartItems.length} color="secondary">
                    <ShoppingCart />
                </Badge>
                <Typography style={{ marginLeft: '10' }}>Cart</Typography>
            </Link>
            <Login open={open} setopen={setopen} setAccount={setAccount} />
        </Box>
    )
}

export default HeaderButtons;