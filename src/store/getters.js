export const getCartData = (state) => {
    return {
        'cartData': state.cartData,
        'totalQty': state.totalQty,
        'totalAmount': state.totalAmount
    };
}