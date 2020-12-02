import { combineReducers } from 'redux';

import productsReducer from './products.reducer';
import cartReducer from './cart.reducer';
import ordersReducer from './orders.reducer';

export const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
});
