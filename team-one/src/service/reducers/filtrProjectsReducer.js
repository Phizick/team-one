import { CLOSE_FILTR_PROJECTS_MODAL, OPEN_FILTR_PROJECTS_MODAL } from "../action";

const initialState = {
  filtProjects: false,
};

export const filtrProjectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_FILTR_PROJECTS_MODAL: {
      return {
        filtrProjects: true,
      };
    }
    case CLOSE_FILTR_PROJECTS_MODAL: {
      return {
        filtProjects: false,
      };
    }
    default: {
      return state;
    }
  }
};
