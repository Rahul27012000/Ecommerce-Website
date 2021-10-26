import { AppBar, Toolbar, makeStyles, Typography, Box, withStyles, IconButton, Drawer, List, ListItem } from '@material-ui/core'
import Searchbar from './Searchbar'
import HeaderButtons from './HeaderButtons.js'
import { Link } from 'react-router-dom'
import { Menu } from '@material-ui/icons'
import { useState } from 'react'
const useStyle = makeStyles(theme=>({
    header: {
        backgroundColor: '#2874f0',
        height: 55
    },
    logo: {
        width: 75
    },
    subURL: {
        width: 10,
        marginLeft: 4,
        height: 10
    },
    container: {
        display: 'flex'
    },
    component: {
        marginLeft: '12%',
        lineHeight: 0,
        textDecoration: 'none',
        color: "#fff"
    },
    subHeading: {
        fontSize: 10,
        fontStyle: 'Italic'
    },
    menubtn: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    list: {
        width: '250px'
    },
    custom:{
        margin: '0 5% 0 auto', 
        [theme.breakpoints.down('sm')]: {
            display: 'none',
          
        } 
    }
}))
// makestyle is for our CSS
// materialUI ki CSS ko override ke lie withstyles use hota he 
const ToolBar = withStyles({
    root: {
        minHeight: 55
    }
})(Toolbar);

const Header = () => {
    const classes = useStyle();
    const [open, setOpen] = useState(false);
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const handleClose = () => {
        setOpen(false);
    }
    const handleClick = () => {
        setOpen(true);
    }
    const list = () => {
        return (
            <Box className={classes.list} onClick={handleClose}>
                <List>
                    <ListItem>
                        <HeaderButtons />
                    </ListItem>
                </List>
            </Box>
        )
    }
    return (
        <AppBar className={classes.header}>
            <ToolBar>
                <IconButton color="inherit">
                    <Menu className={classes.menubtn} onClick={handleClick} />
                </IconButton>
                <Drawer open={open} onClose={handleClose}>
                    {
                        list()
                    }
                </Drawer>
                <Link to="/" className={classes.component}>
                    <img src={logoURL} className={classes.logo}></img>
                    <Box className={classes.container}>
                        <Typography className={classes.subHeading}>Explore <Box component="span" style={{ color: '#ffe500' }}>Plus</Box></Typography>
                        {/* Typography give P tag by default and box gives div tag by default */}
                        <img src={subURL} className={classes.subURL} />
                    </Box>
                </Link>
                <Searchbar />
                <span className={classes.custom}>
                <HeaderButtons></HeaderButtons>
                </span>
            </ToolBar>
        </AppBar>
    )
}

export default Header;