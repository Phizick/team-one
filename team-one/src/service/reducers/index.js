import { combineReducers } from "redux";
import { deleteProjectReduce } from "./deleteProjectReducer";
import { userInfoReducer } from "./userInfoReducer";
export const rootReducer = combineReducers({
  user: userInfoReducer,
  deleteProject: deleteProjectReduce,
});
