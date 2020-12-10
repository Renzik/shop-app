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
      const filteredItems = [...state.userProducts].filter(item => item.id !== itemId);

      return { ...state, userProducts: filteredItems };

    default:
      return state;
  }
};
