import { CLOSE_FILTR_PROJECTS, OPEN_FILTR_PROJECTS } from "../action";

const initialState = {
  filtProjects: false,
};

export const filtrProjectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_FILTR_PROJECTS: {
      return {
        filtrProjects: true,
      };
    }
    case CLOSE_FILTR_PROJECTS: {
      return {
        filtProjects: false,
      };
    }
    default: {
      return state;
    }
  }
};
