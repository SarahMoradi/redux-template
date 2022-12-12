import {
  productAdd,
  productGetAll,
  productGetByID,
  productRemove,
  productFind,
  productEdit,
} from "../actions/actionTypes";

const initialState = {
  items: [
    { productId: 1, productName: "Product A", productPrice: 100 },
    { productId: 2, productName: "Product B", productPrice: 200 },
    { productId: 3, productName: "Product C", productPrice: 300 },
    { productId: 4, productName: "Product D", productPrice: 400 },
  ],
  isLoading: true,
};

function ProductReducer(state = initialState, action) {
  switch (action.type) {
    case productGetAll:
      return {...state, items: state.items};
    case productGetByID:
      return {...state, items: state.items.find((p) => p.productId == action.payload)}
    case productAdd:
      return {...state, items: state.items.concat([action.payload])};
    case productRemove:
      return {...state, items: state.items.filter((p) => p.productId != action.payload)};
    default:
      return state;
      break;
  }
}

export default ProductReducer;