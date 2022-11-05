// Главный стор

import { combineReducers } from "redux";
import { deleteProjectReduce } from "./deleteProjectReducer";
import { recommendationsReducer } from "./openRecommendationsReducer";
import { pdfModalReducer } from "./pdfModalReducer";
import { subjectsReducer } from "./subjectsReducer";
import { userInfoReducer } from "./userInfoReducer";
export const rootReducer = combineReducers({
  user: userInfoReducer,
  deleteProject: deleteProjectReduce,
  openRecommendations: recommendationsReducer,
  subjects: subjectsReducer,
  pdfModal: pdfModalReducer,
});
