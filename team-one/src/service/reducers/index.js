import { combineReducers } from "redux";
import { deleteProjectReduce } from "./deleteProjectReducer";
import { recommendationsReducer } from "./openRecommendationsReducer";
import { userInfoReducer } from "./userInfoReducer";
export const rootReducer = combineReducers({
  user: userInfoReducer,
  deleteProject: deleteProjectReduce,
  openRecommendations: recommendationsReducer,
});
