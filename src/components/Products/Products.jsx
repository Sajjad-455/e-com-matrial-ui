import React,{useContext} from 'react';
import {ProductContext} from '../../Global/ProductsContext';
import {Container} from '@material-ui/core'
import {Grid} from '@material-ui/core/'
import {Typography} from '@material-ui/core/'
import {Paper} from '@material-ui/core/'
import {Box} from '@material-ui/core/'
import {Button} from '@material-ui/core/'
import {useStyle} from './Products.style'
import Banner from '../Banner/Banner';
import {cartContext} from "../../Global/CartContext"

const Products=() => {
    const classes=useStyle();
    const {products}=useContext(ProductContext);
    const {dispatch}=useContext(cartContext);
    const data=useContext(cartContext);
    console.log(data);

    return (
        <Container>
            <Banner />
            <Typography variant="h4" className={classes.mainTitle}>Products</Typography>
            <Grid container spacing={3}>
                {
                    products.map(product => (
                        <Grid item xs={12} sm={6} md={3} key={product.id} >
                            <Paper>
                                <Box className={classes.productStatus}>
                                    <Typography><img src={product.image} alt="" className={classes.productImage} /></Typography>
                                    <Typography className={classes.productTitle}>
                                        {product.productStatus==="hot"? <Typography variant="subtitle1" className={classes.hot}>Hot</Typography>:<Typography variant="subtitle1" className={classes.new}>New</Typography>}
                                    </Typography>
                                </Box>
                                <Box p={2}>
                                    <Typography variant="h6">{product.name}</Typography>
                                    <Typography variant="subtitle1" className={classes.productPrice}>{product.price}$</Typography>
                                    <Button variant="contained" fullWidth color="secondary" onClick={() => dispatch({type: 'ADD_TO_CART',id: product.id,products})}>Add To Cart</Button>
                                </Box>
                            </Paper>
                        </Grid>

                    ))}


            </Grid>
        </Container>

    )
}

export default Products;

