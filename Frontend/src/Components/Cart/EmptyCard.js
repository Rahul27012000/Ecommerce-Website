import { makeStyles, Typography, Box,Button } from '@material-ui/core';
import {useHistory} from 'react-router-dom'
const useStyle = makeStyles(theme=>({
    component: {
        height: '65vh',
        width: '80%',
        background: '#fff',
        margin: '80px 140px',
        [theme.breakpoints.down('md')]: {
            width: '100%',
            margin: 0,
        }
        
    },
    image: {
        width: '15%'
    },
    container: {
        textAlign: 'center',
        paddingTop: 70,
      '& > *':{
          marginTop:10,
          fontSize:14
      }
},
button:{
    marginTop:20,
    padding:"12px 70px",
    borderRadius:2,
    fontSize:14,
    backgroundColor:"#2874f0",
    color:"#fff"
}
}))
const EmptyCart = () => {
    const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
    const classes = useStyle();
    const history=useHistory();

    const addItems=()=>{
      history.push('/')
    //   The useHistory hook gives you access to the history instance that you may use to navigate.
    }
    return (
        <Box className={classes.component}>
            <Box className={classes.container}>
                <img src={imgurl} className={classes.image} />
                <Typography>Your cart is empty!</Typography>
                <Typography>Add items to it now.</Typography>
                <Button className={classes.button} variant="contained" onClick={()=>addItems()}>Shop Now</Button>
            </Box>
        </Box>
    )
}
export default EmptyCart;