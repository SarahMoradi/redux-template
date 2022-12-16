import { combineReducers } from "redux";
import productReducer from "./productReducer";
import productThunkReducer from "./productThunkReducer";

export default combineReducers({
  productState: productReducer,
  productThunkState: productThunkReducer,
});

// const rootReducer = combineReducers({
//   productState: ProductReducer,
// })
// export default rootReducer;