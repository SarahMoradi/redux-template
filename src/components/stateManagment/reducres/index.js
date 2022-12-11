import { combineReducers } from "redux";
import ProductReducer from "./productReducer";

export default combineReducers({
  productState: ProductReducer,
});
