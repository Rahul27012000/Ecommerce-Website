import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Box, Button, makeStyles, Typography, Grid } from '@material-ui/core'
import TotalView from './TotalView.js'
import CartItem from './CartItem.js'
import { useDispatch } from 'react-redux'
import { removefromcart } from '../../Redux/Actions/cartactions'
import EmptyCard from './EmptyCard'



const useStyle = makeStyles(theme => ({
    component: {
        padding: "30px 135px",
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            padding: '15px 0px',
            margin:'5px'
        }
    },
    leftcomp: {
        paddingRight:15,
        [theme.breakpoints.down('sm')]: {
            marginBottom:15
        }
    },
    rightcomp: {

    },
    header: {
        padding: '15px 24px',
        backgroundColor: "#fff",
    },
    place: {
        background: "#fb641b",
        color: "#fff",
        borderRadius: 2,
        width: 250,
        height: 50,
        display: 'flex',
        marginLeft: 'auto'
    },
    bottom: {
        padding: "16px 22px",
        backgroundColor: "#fff",
        borderTop: '1px solid f0f0f0',
        boxShadow: '0 2px 10px 0 rgb(0 0 0 /10%)'
    }
}))
const Cart = () => {
    const classes = useStyle();
    const { cartItems } = useSelector(state => state.cart)
    const dispatch = useDispatch()
    useEffect(() => {
        console.log(cartItems)
    })
    const removeitem = (id) => {
        dispatch(removefromcart(id));
    }
    return (
        <>
            {
                cartItems.length ?
                    <Grid container className={classes.component}>
                        <Grid item className={classes.leftcomp} lg={9} md={9} sm={12} xs={12}>
                            <Box className={classes.header}>
                                <Typography style={{ fontWeight: 600, fontSize: 18 }}>
                                    My Cart ({cartItems.length})
                                </Typography>
                            </Box>
                            {
                                cartItems.map(item => (
                                    <CartItem item={item} removeitem={removeitem} />
                                ))
                            }
                            <Box className={classes.bottom}>
                                <Button className={classes.place} variant="contained">Place Order</Button>
                            </Box>
                        </Grid>
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                            <TotalView className={classes.rightcomp} cartItems={cartItems} />
                        </Grid>
                    </Grid>
                    :
                    <EmptyCard />
            }

        </>
    )
}

export default Cart;