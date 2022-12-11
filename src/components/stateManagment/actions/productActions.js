// CRUD Operations

// CREATE
export const addProduct = (item) => ({
  type: "ADD_PRODUCT",
  payload: item,
});

// READ
export const getAllProducts = () => ({
  type: "GET_ALL_PRODUCT",
});

export const getById = (id) => ({
  type: "GET_PRODUCT_BY_ID",
  payload: id,
});

// UPDATE
export const editProduct = (item) => ({
  type: "EDIT_PRODUCT",
  payload: item,
});

// DELETE
export const removeProduct = (id) => ({
  type: "REMOVE_PRODUCT",
  payload: id,
});
