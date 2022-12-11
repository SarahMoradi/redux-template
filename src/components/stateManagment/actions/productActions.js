export const getAllProducts = () => ({
  type: "GET_ALL_PRODUCT",
});

export const getById = (id) => ({
  type: "GET_PRODUCT_BY_ID",
  payload: id,
});

export const addProduct = (item) => ({
  type: "ADD_PRODUCT",
  payload: item,
});

export const removeProduct = (id) => ({
  type: "REMOVE_PRODUCT",
  payload: id,
});

export const editProduct = (item) => ({
  type: "EDIT_PRODUCT",
  payload: item,
});
