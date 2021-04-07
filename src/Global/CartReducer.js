export const CartReducer=(state,action) => {
    let {shoppingCart,totalPrice,qty}=state;
    let product;
    let index;
    let updatedPrice;
    let updatedQty;
    switch(action.type) {
        case 'ADD_TO_CART':
            const check=shoppingCart.find(cart => cart.id===action.id);
            if(check) {
                // return state;
                return {shoppingCart: [...shoppingCart],totalPrice,message: 'This is product is already in the cart!',qty};
            } else {
                product=action.products.find(product => product.id===action.id);
                product['qty']=1;
                updatedQty=qty+1;
                return {shoppingCart: [product,...shoppingCart],totalPrice: totalPrice+product.price,message: '',qty: updatedQty};
            }
            break;
    }
}