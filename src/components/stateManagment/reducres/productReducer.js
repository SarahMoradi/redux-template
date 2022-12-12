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
    { id: 1, productName: "Product A", price: 100 },
    { id: 2, productName: "Product B", price: 200 },
    { id: 3, productName: "Product C", price: 300 },
  ],
  isLoading: true,
};

function ProductReducer(state = initialState, action) {
  switch (action.type) {
    case productGetAll:
      return {...state, items: state.items};
    case productGetByID:
      return {...state, items: state.items.find((p) => p.id == action.payload)}
    case productAdd:
      return {...state, items: state.items.concat([action.payload])};
    case productRemove:
      return {...state, items: state.items.filter((p) => p.id != action.payload)};
    default:
      return state;
      break;
  }
}

export default ProductReducer;