import React,{useContext} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useStyle} from './Navbar.style'
import {Link} from "react-router-dom";
import {cartContext} from "../../Global/CartContext"
export default function ButtonAppBar() {
    const classes=useStyle();
    const {shoppingCart}=useContext(cartContext);
    return (

        <AppBar position="static" color="secondary">
            <Toolbar>
                <Container className={classes.root}>
                    <Grid container>
                        <Grid item>
                            <Typography variant="h5" className={classes.logo}>
                                <Link to="/">PakExpress</Link>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.shoopingCart}>
                        <Typography><Link to="/cart"><ShoppingCartIcon fontSize="large" /></Link></Typography>
                        <Typography variant="subtitle1" className={classes.cartItem}>{shoppingCart? shoppingCart.length:0}</Typography>
                    </Grid>
                </Container>
            </Toolbar>
        </AppBar>



    );
}