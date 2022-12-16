import {
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCT_START,
  FETCH_PRODUCT_SUCCESS,
} from '../actions/actionTypes'

const initialState = {
  items: [],
  isLoading: true,
  message: '',
}

function productThunkReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCT_START:
      return { items: [], message: '', isLoading: true }
    case FETCH_PRODUCT_SUCCESS:
      return { items: action.payload, message: '', isLoading: false }
    case FETCH_PRODUCT_FAILURE:
      return { items: [], message: action.payload, isLoading: false }
    default:
      return state
  }
}

export default productThunkReducer
