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
        total: (state.total += currItem.price),
      };

    case cartActions.DECREASE_QTY:
      const theItem = state.items[action.payload];
      const id = action.payload;

      return {
        ...state,
        items: {
          ...state.items,
          [id]: new CartItem(
            theItem.quantity - 1,
            theItem.price,
            theItem.title,
            theItem.price * (theItem.quantity - 1),
            theItem.images
          ),
        },
        total: (state.total -= theItem.price),
      };

    case cartActions.DELETE_ITEM:
      const itemId = action.payload;
      const itemsCopy = { ...state.items };
      const product = itemsCopy[itemId];

      delete itemsCopy[itemId];

      // const remakeState = () => {
      //   const newStateItems = { items: {}, total: 0 };
      //   for (const key in state.items) {
      //     const item = state.items[key];
      //     if (key !== itemId) {
      //       newStateItems.items[key] = item;
      //       newStateItems.total += item.sum;
      //     }
      //   }
      //   return newStateItems;
      // };

      return { ...state, items: itemsCopy, total: state.total - product.sum };

    default:
      return state;
  }
};
