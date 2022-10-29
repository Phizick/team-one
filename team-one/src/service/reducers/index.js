import { combineReducers } from "redux";
import { filtrProjectsReducer } from "./filtrProjectsReducer";
import { userInfoReducer } from "./userInfoReducer";
export const rootReducer = combineReducers({
  user: userInfoReducer,
  filtrProjects: filtrProjectsReducer,
});
