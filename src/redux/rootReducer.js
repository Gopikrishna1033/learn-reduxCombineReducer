import { combineReducers } from "redux";
import { messageReducer } from "./messages/message.reducer";
import { productReducer } from "./products/product.reducer";

let rootReducer = combineReducers({message:messageReducer,product:productReducer})
export {rootReducer}