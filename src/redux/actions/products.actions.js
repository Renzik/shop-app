import Product from '../../models/product';

export const productActions = {
  DELETE_USER_ITEM: 'DELETE_USER_ITEM',
  ADD_NEW_PRODUCT: 'ADD_NEW_PRODUCT',
  EDIT_PRODUCT: 'EDIT_PRODUCT',
  SET_PRODUCTS: 'SET_PRODUCTS',
};

export const fetchProducts = () => async dispatch => {
  try {
    const response = await fetch(
      'https://rn-shop-app-b302a-default-rtdb.firebaseio.com/products.json'
    );

    const resData = await response.json();
    const loadedProducts = [];

    for (const key in resData) {
      const currProduct = resData[key];
      loadedProducts.push(
        new Product(
          key,
          'u1',
          currProduct.title,
          currProduct.images,
          currProduct.description,
          currProduct.price
        )
      );
    }

    dispatch({ type: productActions.SET_PRODUCTS, products: loadedProducts });
  } catch (e) {
    console.log('Error fetching products: ', e);
  }
};

export const deleteUserItem = id => ({
  type: productActions.DELETE_USER_ITEM,
  payload: id,
});

export const addNewProduct = (title, imageUrl, description, price) => async dispatch => {
  try {
    const response = await fetch(
      'https://rn-shop-app-b302a-default-rtdb.firebaseio.com/products.json',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          images: [imageUrl],
          title: title,
          description: description,
          price: price,
        }),
      }
    );
    const resData = await response.json();

    dispatch({
      type: productActions.ADD_NEW_PRODUCT,
      payload: {
        id: resData.name,
        images: [imageUrl],
        title: title,
        description: description,
        price: price,
      },
    });
  } catch (error) {
    console.log('Error creating new product: ', error);
  }
};

export const editProduct = (id, title, imageUrl, description) => ({
  type: productActions.EDIT_PRODUCT,
  payload: { id, title, imageUrl, description },
});
