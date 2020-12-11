export const productActions = {
  DELETE_USER_ITEM: 'DELETE_USER_ITEM',
  ADD_NEW_PRODUCT: 'ADD_NEW_PRODUCT',
  EDIT_PRODUCT: 'EDIT_PRODUCT',
};

export const deleteUserItem = id => ({
  type: productActions.DELETE_USER_ITEM,
  payload: id,
});

export const addNewProduct = (title, imageUrl, description, price) => {
  console.log(title);
  console.log(imageUrl);
  console.log(description);
  console.log(price);
  return {
    type: productActions.ADD_NEW_PRODUCT,
    payload: '',
  };
  // { images: [imageUrl], title: title, description: description, price: price }
};

export const editProduct = id => ({
  type: productActions.EDIT_PRODUCT,
  payload: id,
});
