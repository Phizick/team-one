import { combineReducers } from "redux";
import { testReducer } from "./testReducer";
export const rootReducer = combineReducers({
  test: testReducer,
});
