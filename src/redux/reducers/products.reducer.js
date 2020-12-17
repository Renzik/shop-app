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

    case productActions.EDIT_PRODUCT:
      console.log(action.payload);
      const productToEdit = state.userProducts.find(item => item.id === action.payload.id);
      const { title, imageUrl, description } = action.payload;
      const newItem = new Product(
        productToEdit.id,
        productToEdit.ownerId,
        title,
        [imageUrl, ...productToEdit.images.slice(1)],
        description,
        productToEdit.price
      );

      return {
        ...state,
        userProducts: [
          newItem,
          ...state.userProducts.filter(item => item.id !== action.payload.id),
        ],
        availableProducts: [
          newItem,
          ...state.availableProducts.filter(item => item.id !== action.payload.id),
        ],
      };

    default:
      return state;
  }
};
