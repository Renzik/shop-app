import PRODUCTS from '../../data/dummyData';
import { productActions } from '../actions/products.actions';

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter(product => product.ownerId === 'u1'),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case productActions.DELETE_USER_ITEM:
      const itemId = action.payload;

      return {
        ...state,
        userProducts: state.userProducts.filter(item => item.id !== itemId),
        availableProducts: state.availableProducts.filter(item => item.id !== itemId),
      };

    default:
      return state;
  }
};
