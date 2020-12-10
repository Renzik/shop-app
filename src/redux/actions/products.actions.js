export const productActions = {
  DELETE_USER_ITEM: 'DELETE_USER_ITEM',
};

export const deleteUserItem = id => ({
  type: productsAction.DELETE_USER_ITEM,
  payload: id,
});
