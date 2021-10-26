import Navbar from './Navbar'
import Banner from './Banner'
import Slide from './Slide'
import { Box, makeStyles } from "@material-ui/core"
import Midsection from './Midsection'
import {useSelector,useDispatch} from 'react-redux'
import { useEffect } from 'react'
import { getProducts as listProducts } from '../../Redux/Actions/productaction.js'
//import { products } from '../../Constants/data'

const useStyle = makeStyles(theme => ({
    component: {
        padding:20
    },
    leftComponent: {
        width: '83%',
        [theme.breakpoints.down('md')]: {
            width: '100%'
        }
    },
    rightComponent: {
        marginTop: 12,
        background: '#FFFFFF',
        width: '17%',
        marginLeft: 10,
        padding: 5,
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    }
}));
const Home = () => {
    const classes = useStyle();
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    const { products }  = useSelector(state => state.getProducts);
    const dispatch=useDispatch()
    useEffect(() => {
       dispatch(listProducts());
    }, [dispatch])
    return (
        <div>
            <Navbar />
            <Box className={classes.component}>
                <Banner />
                <Box style={{ display: 'flex' }}>
                    <Box className={classes.leftComponent}>
                        <Slide timer={true} title="Deal of the Day" products={ products }/>
                    </Box>
                    <Box className={classes.rightComponent}>
                        <img src={adURL} style={{ width: 210 }}></img>
                    </Box>
                </Box>
                <Midsection />
                <Slide timer={false} title="Discounts for you" products={ products }/>
                <Slide timer={false} title="Suggested Items" products={ products }/>
                <Slide timer={false} title="Top Selection" products={ products }/>
                <Slide timer={false} title="Recommended Items" products={ products }/>
                <Slide timer={false} title="Best Sellers" products={ products }/>
 
            </Box>

           
        </div>


    )
}

export default Home;