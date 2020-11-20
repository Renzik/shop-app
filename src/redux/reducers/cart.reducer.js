import { cartActions } from '../actions/cart.actions';
import CartItem from '../../models/cart-item';

const initialState = {
  items: {},
  total: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case cartActions.ADD_TO_CART:
      const item = action.payload;
      const quantity = action.quantity;

      console.log(state.items);
      return state.items[item.id]
        ? {
            ...state,
            items: {
              ...state.items,
              [item.id]: new CartItem(
                state.items[item.id].quantity + quantity,
                item.price,
                item.title,
                item.price * state.items[item.id].quantity
              ),
            },
            total: (state.total += item.price),
          }
        : {
            ...state,
            items: {
              ...state.items,
              [item.id]: new CartItem(quantity, item.price, item.title, item.price),
            },
            total: (state.total += item.price),
          };

    default:
      return state;
  }
};
