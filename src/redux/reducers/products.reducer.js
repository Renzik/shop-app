import PRODUCTS from '../../data/dummyData';
import { productActions } from '../actions/products.actions';
import Product from '../../models/product';

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

    case productActions.ADD_NEW_PRODUCT:
      const productToAdd = action.payload;
      // console.log(action.payload, 'reducer');
      const newProduct = new Product(
        new Date().toString(),
        'u1',
        productToAdd.title,
        productToAdd.images,
        productToAdd.description,
        productToAdd.price
      );

      return {
        ...state,
        availableProducts: [...state.availableProducts, newProduct],
        userProducts: [...state.userProducts, newProduct],
      };

    default:
      return state;
  }
};
