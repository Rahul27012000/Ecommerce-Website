
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getProductDetails } from '../../Redux/Actions/productaction'
import Actionitem from './Actionitem'
import { Box,Grid, makeStyles, Typography, Table, TableBody, TableRow, TableCell } from '@material-ui/core'
import clsx from 'clsx' //for handling multiple classes in same element
import { LocalOffer as Badge } from '@material-ui/icons'
const useStyle = makeStyles(theme=>({
    component: {
        marginTop: 55,
        background: "#f2f2f2"

    },
    containers: {
        background: "#fff",
        display: 'flex',
        flexDirection:'row',
        [theme.breakpoints.down('md')]: {
            margin: 0,
        },
        [theme.breakpoints.down('lg')]: {
            margin: '0 100px 0 20px',
        }
    },
    leftcon:{
        minWidth: "40%",
        [theme.breakpoints.down('md')]: {
           padding: '20px 40px',
           
        },

    },
    rightcn: {
        margin: 50,
        '& > *': {
            marginTop: 10
        }
    },
    smalltext: {
        fontSize: 14,
        verticalAlign:'baseline',
        '& > *': {
            fontSize: '14px',
            marginTop: 10
        }
    },
    greyTextColor: {
        color: "#878787"
    },
    price: {
        fontSize: 28,
    },
    badge: {
        fontSize: 14,
        marginRight: 10,
        color: "#00cc00"
    }
}))

// by match(by default prop) we can access PARAMS 
const DetailView = ({ match }) => {
    const classes = useStyle();
    const faassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const sellerURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    const { product } = useSelector(state => state.getProductDetails)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductDetails(match.params.id))
    }, [dispatch])

    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));
    return (
        <Box className={classes.component}>
            {
                product && Object.keys(product).length &&
                <Grid container className={classes.containers}>
                    <Grid item lg={4} md={4} sm={8} xs={12} className={classes.leftcon}>
                        <Actionitem product={product}/>
                    </Grid>
                    <Grid item className={classes.rightcn} lg={4} md={8} sm={8} xs={12}>
                        <Typography>{product.title.longTitle} </Typography>
                        <Typography className={clsx(classes.smalltext, classes.greyTextColor)}>
                            8 Ratings and 1 review
                            <span><img src={faassured} style={{ width: '77px', marginLeft: 20 }}></img></span>
                        </Typography>
                        <Typography>
                            <span className={classes.price}> ₹{product.price.cost}</span>&nbsp;&nbsp;&nbsp;
                            <span className={classes.greyTextColor}> <strike>₹{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                            <span style={{ color: '#388e3c' }}>{product.price.discount} off</span>
                        </Typography>
                        <Typography style={{fontWeight:600,marginTop:20}}>
                            Available offers
                        </Typography>
                        <Box className={classes.smalltext}>
                            <Typography><Badge className={classes.badge} /> Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</Typography>
                            <Typography><Badge className={classes.badge} /> Bank Offer15% Instant discount on first Pay Later order of ₹500 and above</Typography>
                            <Typography><Badge className={classes.badge} /> No cost EMI ₹1,741/month. Standard EMI also available</Typography>
                        </Box>
                        <Table>
                            <TableBody>
                                <TableRow className={classes.smalltext}>
                                    <TableCell className={classes.greyTextColor}>Delivery</TableCell>
                                    <TableCell style={{fontWeight:600}}>{date.toDateString()} | ₹40</TableCell>
                                </TableRow>
                                <TableRow className={classes.smalltext}>
                                    <TableCell className={classes.greyTextColor}>Warranty</TableCell>
                                    <TableCell>No Warranty</TableCell>
                                </TableRow>
                                <TableRow className={classes.smalltext}>
                                    <TableCell className={classes.greyTextColor}>Seller</TableCell>
                                    <TableCell className={classes.smalltext}>
                                        <span style={{color:"#2874f0",fontWeight:600}}>SuperComNet</span>
                                        <Typography>GST invoice Available</Typography>
                                        <Typography>14 Days return Policy</Typography>
                                        <Typography>View more sellers starting from ₹300 </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2}>
                                        <img src={sellerURL} style={{width:390}}></img>
                                    </TableCell>
                                    
                                </TableRow>
                                <TableRow className={classes.smalltext}>
                                    <TableCell className={classes.greyTextColor}>Description</TableCell>
                                    <TableCell>{product.description}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Grid>
                </Grid>
            }
        </Box>

    )
}

export default DetailView