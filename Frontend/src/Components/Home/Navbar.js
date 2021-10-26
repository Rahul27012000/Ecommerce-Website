import { navData } from "../../Constants/data";
import { Box, Typography, makeStyles } from "@material-ui/core"

const useStyle = makeStyles(theme => ({
    component: {
        display: 'flex',
        margin: '55px 120px 0px 120px',
        justifyContent: 'space-between',
        overflowX: 'overlay',
        [theme.breakpoints.down('md')]: {
            margin: 0
        }
    },
    container: {
        textAlign: 'center',
        padding: '12px 8px'
    },
    image: {
        width: 64,
    },
    text: {
        fontSize: 14,
        fontWeight: 600
    }
}))
const Navbar = () => {
    const classes = useStyle();
    return (
        <Box className={classes.component}>
            {
                navData.map(temp => (
                    <Box className={classes.container}>
                        <img src={temp.url} className={classes.image} />
                        <Typography className={classes.text}>{temp.text}</Typography>
                    </Box>
                ))
            }

        </Box>

    )
}

export default Navbar;