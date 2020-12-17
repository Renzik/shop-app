import PRODUCTS from '../../data/dummyData';
import { productActions } from '../actions/products.actions';
import Product from '../../models/product';

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter(product => product.ownerId === 'u1'),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case productActions.SET_PRODUCTS:
      return {
        ...state,
        availableProducts: [...state.availableProducts, ...action.products],
        userProducts: action.products.filter(product => product.ownerId === 'u1'),
      };

    case productActions.ADD_NEW_PRODUCT:
      const productToAdd = action.payload;

      const newProduct = new Product(
        productToAdd.id,
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

    case productActions.DELETE_USER_ITEM:
      const itemId = action.payload;

      return {
        ...state,
        userProducts: state.userProducts.filter(item => item.id !== itemId),
        availableProducts: state.availableProducts.filter(item => item.id !== itemId),
      };

    case productActions.EDIT_PRODUCT:
      const productIdx = state.userProducts.findIndex(item => item.id === action.payload.id);
      // find the index
      const { title, imageUrl, description } = action.payload;
      // get new values when editing
      const newItem = new Product(
        state.userProducts[productIdx].id,
        state.userProducts[productIdx].ownerId,
        title,
        [imageUrl, ...state.userProducts[productIdx].images.slice(1)],
        description,
        state.userProducts[productIdx].price
      );
      // create new item with new values
      const replaceItem = arr => {
        // pure func to edit item and keep it on the same index
        arr.splice(productIdx, 1, newItem);
        return arr;
      };

      return {
        ...state,
        userProducts: [...replaceItem(state.userProducts)],
        availableProducts: [...replaceItem(state.availableProducts)],
      };

    default:
      return state;
  }
};
