import { combineReducers } from "redux";
import { deleteProjectReduce } from "./deleteProjectReducer";
import { filtrProjectsReducer } from "./filtrProjectsReducer";
import { userInfoReducer } from "./userInfoReducer";
export const rootReducer = combineReducers({
  user: userInfoReducer,
  filtrProjects: filtrProjectsReducer,
  deleteProject: deleteProjectReduce,
});
