export const cartActions = {
  ADD_TO_CART: 'ADD_TO_CART',
  INCREASE_QTY: 'INCREASE_QTY',
  DECREASE_QTY: 'DECREASE_QTY',
  DELETE_ITEM: 'DELETE_ITEM',
  CLEAR_CART: 'CLEAR_CART',
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

export const decreaseQty = id => ({
  type: cartActions.DECREASE_QTY,
  payload: id,
});

export const deleteItem = id => ({
  type: cartActions.DELETE_ITEM,
  payload: id,
});

export const clearCart = () => ({
  type: cartActions.CLEAR_CART,
});
