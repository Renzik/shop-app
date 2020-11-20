export const cartActions = {
  ADD_TO_CART: 'ADD_TO_CART',
};

export const addToCart = (product, qty) => ({
  type: cartActions.ADD_TO_CART,
  payload: product,
  quantity: qty,
});
