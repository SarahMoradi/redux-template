import {
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCT_START,
  FETCH_PRODUCT_SUCCESS,
} from './actionTypes'

export function getAllProducts(dispatch) {
  const apiUrl = 'https://apitester.ir/api/Products'
  dispatch(fetchProductsStart)
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => fetchProductsSuccess(data))
    .catch((error) => fetchProductsFailure(error))
}
export const fetchProductsStart = () => ({
  type: FETCH_PRODUCT_START,
})
export const fetchProductsSuccess = (data) => ({
  type: FETCH_PRODUCT_SUCCESS,
  payload: data
})
export const fetchProductsFailure = (errorMessage) => ({
  type: FETCH_PRODUCT_FAILURE,
  payload: errorMessage
})
