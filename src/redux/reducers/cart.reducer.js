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
      const orderQuantity = action.quantity;
      const itemInState = state.items[item.id];

      if (itemInState) {
        return {
          ...state,
          items: {
            ...state.items,
            [item.id]: new CartItem(
              itemInState.quantity + orderQuantity,
              item.price,
              item.title,
              item.price * (itemInState.quantity + orderQuantity),
              item.images
            ),
          },
          total: (state.total += item.price * orderQuantity),
        };
      } else {
        return {
          ...state,
          items: {
            ...state.items,
            [item.id]: new CartItem(
              orderQuantity,
              item.price,
              item.title,
              item.price * orderQuantity,
              item.images
            ),
          },
          total: (state.total += item.price * orderQuantity),
        };
      }

    case cartActions.INCREASE_QTY:
      const currItem = state.items[action.payload];
      console.log(currItem);

      return {
        ...state,
        items: {
          ...state.items,
          [action.payload]: new CartItem(
            currItem.quantity + 1,
            currItem.price,
            currItem.title,
            currItem.price * (currItem.quantity + 1),
            currItem.images
          ),
        },
      };

    default:
      return state;
  }
};
