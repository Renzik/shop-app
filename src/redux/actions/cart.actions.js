export const cartActions = {
  ADD_TO_CART: 'ADD_TO_CART',
  INCREASE_QTY: 'INCREASE_QTY',
};

export const addToCart = (product, qty) => ({
  type: cartActions.ADD_TO_CART,
  payload: product,
  quantity: qty,
});

export const increaseQty = id => ({
  type: cartActions.INCREASE_QTY,
  payload: id,
});
