import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import { makeStyles, Box, Typography, Button, Divider } from '@material-ui/core'
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme=>({
    image: {
        height: 150
    },
    component: {
        marginTop: 12,
        backgroundColor: "#fff"
    },
    deal: {
        padding: "15px 20px",
        display: 'flex',
    },
    dealtext: {
        fontSize: 22,
        fontWeight: 600,
        lineHeight: '32px',
        marginRight: 25
    },
    timer: {
        color: '#7f7f7f',
        marginLeft: 10,
        display: 'flex',
        alignItems: 'center'
    },
    button: {
        marginLeft: 'auto',
        backgroundColor: "#2874f0",
        borderRadius: '2px',
        fontSize: '13px'
    },
    text: {
        fontSize: 14,
        marginTop: 5
    },
    wrapper: {
        padding: "31px 15px"
    },
    Timmer:{
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    timerr:{
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    }
}))
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 6
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Slide = ({ timer, title, products }) => {
    const classes = useStyles();
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    const renderer = ({ hours, minutes, seconds }) => {
        // Render a countdown
        return <span className={classes.timer}>{hours}:{minutes}:{seconds} Left</span>;
    }

    return (
        <Box className={classes.component}>
            <Box className={classes.deal}>
                <Typography className={classes.dealtext}>{title}</Typography>
                {
                    timer &&
                    <Box className={classes.timerr}>
                        <img src={timerURL} style={{ width: 24 }}></img>
                        <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
                        
                    </Box>
                }
                    <Button variant="contained" color="primary" className={classes.button}>View All</Button>

                
                {/* React.Fragment or <> DOM me nahi dikhega but div dikhta he  */}
            </Box>
            <Divider />
            <Carousel responsive={responsive} infinite={true} draggable={false} swipeable={false} centerMode={true} autoPlay={true} autoPlaySpeed={2000}
                showDots={false} keyBoardControl={true}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
            >
                {
                    products.map((p) => (
                        <Link to={`product/${p.id}`}>
                            <Box textAlign="center" className={classes.wrapper}>
                                <img src={p.url} className={classes.image}></img>
                                <Typography className={classes.text} style={{ fontWeight: 600, color: "#212121" }}>{p.title.shortTitle}</Typography>
                                <Typography className={classes.text} style={{ color: "green" }}>{p.discount}</Typography>
                                <Typography className={classes.text} style={{ color: "#212121", opacity: 0.6 }}>{p.tagline}</Typography>
                            </Box>
                        </Link>
                    ))
                }
            </Carousel>
        </Box>

    )
}

export default Slide;