import {
  productAdd,
  productGetAll,
  productGetByID,
  productRemove,
  productFind,
  productEdit,
} from "./actionTypes";
// CRUD Operations

// CREATE
export const addProduct = (item) => ({
  type: productAdd,
  payload: item,
});

// READ
export const getAllProducts = () => ({
  type: productGetAll,
});

export const getById = (id) => ({
  type: productGetByID,
  payload: id,
});

// UPDATE
export const editProduct = (item) => ({
  type: productEdit,
  payload: item,
});

// DELETE
export const removeProduct = (id) => ({
  type: productRemove,
  payload: id,
});

// Find
export const findProduct = (id) => ({
  type: productFind,
  payload: id,
});
