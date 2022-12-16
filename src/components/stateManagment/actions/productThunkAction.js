import {
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCT_START,
  FETCH_PRODUCT_SUCCESS,
} from './actionTypes'

export function getAllProducts(dispatch) {
  const apiUrl = 'https://apitester.ir/api/Products'
  dispatch(fetchPrductsStart)
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => fetchPrductsSuccess(data))
    .catch((error) => fetchPrductsFailure(error))
}
export const fetchPrductsStart = () => ({
  type: FETCH_PRODUCT_START,
})
export const fetchPrductsSuccess = (data) => ({
  type: FETCH_PRODUCT_SUCCESS,
  payload: data
})
export const fetchPrductsFailure = (errorMessage) => ({
  type: FETCH_PRODUCT_FAILURE,
  payload: errorMessage
})
