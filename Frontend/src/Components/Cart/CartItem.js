import { Card, Box, makeStyles, Typography, Button } from "@material-ui/core";
import clsx from 'clsx';
import GroupedButton from  './GroupButton.js'

const useStyle = makeStyles({
    component: {
        display: 'flex',
        borderRadius: '0px',
        borderTop:"1px solid #f0f0f0"
    },
    rightcomponent: {
        margin: 20,
    },
    leftcomponent: {
        margin: 20,
        display:'flex',
        flexDirection:'column'
    },
    smalltext:{
        fontSize:14,
    },
    greytextcolor:{
        color:"#878787"
    },
    price:{
        fontSize:18,
        fontWeight:600
    },
    image:{
        height:110,
        width:110
    },
    remove: {
        marginTop: 20,
        fontSize: 15
    }
})

const CartItem = ({ item,removeitem }) => {
    const classes = useStyle();
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    return (
        <Card className={classes.component}>
            <Box className={classes.leftcomponent}>
                <img src={item.url} className={classes.image}></img>
                <GroupedButton/>
            </Box>
            <Box className={classes.rightcomponent}>
                <Typography>{item.title.longTitle}</Typography>
                <Typography style={{marginTop:10}} className={clsx(classes.smalltext,classes.greytextcolor)}>Seller:SuperComNet
                <span><img src={fassured} style={{width:"50px",marginLeft:10}}></img></span>
                </Typography>
                <Typography style={{margin:"20px 0"}}>
                    <span className={classes.price}>₹{item.price.cost}</span>&nbsp;&nbsp;&nbsp;
                    <span className={classes.greytextcolor}><strike>₹{item.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                    <span style={{color:"#388e3c"}}>{item.price.discount} off</span>
                </Typography>
                <Button className={classes.remove} onClick={()=>removeitem(item.id)}>Remove</Button>
            </Box>
        </Card>
    )
}

export default CartItem;