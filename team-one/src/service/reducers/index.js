import { combineReducers } from "redux";
import { userInfoReducer } from "./userInfoReducer";
export const rootReducer = combineReducers({
  user: userInfoReducer
});
