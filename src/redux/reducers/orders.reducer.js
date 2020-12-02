import { orderActions } from '../actions/orders.actions';
import Order from '../../models/order';

const initialState = {
  orders: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case orderActions.CHECKOUT:
      const { items, amount } = action.payload;
      const newOrder = new Order(new Date().toString(), items, amount, new Date());

      return { ...state, orders: [...state.orders, newOrder] };

    default:
      return state;
  }
};
