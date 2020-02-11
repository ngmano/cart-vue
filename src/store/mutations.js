export const setCartData = (state, product) => {
    if (product.length === 0) {
        state.cartData = [];
        state.totalQty = 0;
        state.totalAmount = 0;
        return;
    }

    var isExist = 0;
    var totalAmount = 0;
    var removeIndex = null;
    state.cartData.map(function(cart, index) {
        if (cart.product_key === product.product_key) {
            isExist = 1;
            if (parseInt(product.qty) === 0) {
                removeIndex = index;
            }
            cart.qty = parseInt(product.qty);
        }
        totalAmount += (parseInt(cart.product_price) * parseInt(cart.qty));
    });

    if (removeIndex !== null) {
        state.cartData.splice(removeIndex, 1);
    }
    
    if (parseInt(isExist) === 0) {
        state.cartData.push(product);
        totalAmount = parseInt(totalAmount) + parseInt(product.product_price)
    }
    
    state.totalQty = state.cartData.length;
    state.totalAmount = parseInt(totalAmount);
}