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
    case "GET_ALL_PRODUCT":
      return {...state, items: state.items};
    case "GET_PRODUCT_BY_ID":
      return {...state, items: state.items.find((p) => p.id == action.payload)}
    case "ADD_PRODUCT":
      return {...state, items: state.items.concat([action.payload])};
    case "REMOVE_PRODUCT":
      return {...state, items: state.items.filter((p) => p.id != action.payload)};

    default:
      return state;
      break;
  }
}

export default ProductReducer;