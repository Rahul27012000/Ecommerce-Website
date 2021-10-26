import { imageURL } from "../../Constants/data";
import { makeStyles,Grid } from "@material-ui/core"
import clsx from 'clsx';

const useStyle = makeStyles(theme=>({
    wrapper: {
        display: 'flex',
        justifyContent: "space-between",
    },
    help: {
        [theme.breakpoints.down('md')]: {
            objectFit: 'cover',
            height: 180
        }
    }
}))
const Midsection = () => {
    const classes = useStyle();
    const coronaURL = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return (
        <>
            <Grid lg={12} sm={12} md={12} xs={12} container className={classes.wrapper}>
                {
                    imageURL.map((m) => (
                        <Grid lg={4} sm={12} md={4} xs={12} item >
                        <img src={m} style={{ width: "100%" }}/>
                        </Grid>
                    ))
                }
            </Grid>
            <img src={coronaURL} style={{width:"100%"}} className={clsx(classes.wrapper,classes.help)}/>
        </>

    )
}

export default Midsection;