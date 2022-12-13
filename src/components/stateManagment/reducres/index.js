import ProductReducer from "./productReducer";
import { combineReducers } from "redux";

export default combineReducers({
  productState: ProductReducer,
});

// const rootReducer = combineReducers({
//   productState: ProductReducer,
// })
// export default rootReducer;