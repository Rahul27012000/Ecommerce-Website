import { Box, Button,makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import {ShoppingCart as Cart,FlashOn as Flash} from '@material-ui/icons'
import { addToCart } from '../../Redux/Actions/cartactions'
import { useDispatch } from 'react-redux'
import {useHistory} from 'react-router-dom'

const useStyle=makeStyles(theme=>({
    leftcont:{
        padding:'40px 0 0 80px',
        [theme.breakpoints.down('md')]: {
            padding: '40px 0 0 0',
            
         },
    },
    image:{
        padding:'15px 20px',
        border:'1px solid #f0f0f0',
        width:"95%"
    },
    btn:{
        height:50,
        width:"46%",
        borderRadius:2
    },
    addToCart:{
        backgroundColor:"#ff9f00",
        color:"#fff",
        marginRight:10
    },
    buynow:{
        backgroundColor:"#fb641b",
        color:"#fff"
    }
}))
const Actionitem = ({ product }) => {
    const classes=useStyle();
    const History=useHistory()

    const dispatch=useDispatch()
    const addCart=()=>{
        dispatch(addToCart(product.id))
        History.push('/cart')
    }
    return (
        <Box className={classes.leftcont}>
            <img src={product.detailUrl} className={classes.image}/><br/>
            <Button onClick={()=>addCart()} variant="contained" className={clsx(classes.btn,classes.addToCart)}><Cart/> Add to Cart</Button>
            <Button  variant="contained" className={clsx(classes.btn,classes.buynow)}><Flash/> Buy Now</Button>
        </Box>
    )
}

export default Actionitem;