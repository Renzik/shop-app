export const orderActions = {
  CHECKOUT: 'CHECKOUT',
};

export const checkout = (orderItems, orderAmount) => ({
  type: orderActions.CHECKOUT,
  payload: { items: orderItems, amount: orderAmount },
});
