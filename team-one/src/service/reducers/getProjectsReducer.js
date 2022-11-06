// Редьюсер на получение проектов и удаление проекта по id

import {
  ERROR_PROJECTS,
  REQUEST_DELETE_PROJECT,
  REQUEST_PROJECTS,
  SUCCESS_PROJECTS,
} from "../action";

const initialState = {
  projects: [],
  success: false,
  error: "",
  pending: false,
};

export const getProjectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_PROJECTS: {
      return {
        ...state,
        projects: [],
        success: false,
        error: false,
        pending: true,
      };
    }
    case SUCCESS_PROJECTS: {
      return {
        projects: action.payload,
        success: true,
        error: false,
        pending: false,
      };
    }
    case ERROR_PROJECTS: {
      return {
        ...state,
        projects: [],
        success: false,
        error: `${action.payload}`,
        pending: false,
      };
    }
    case REQUEST_DELETE_PROJECT: {
      const newState = { ...state };
      const indexProject = newState.projects.findIndex(
        (item) => item._id === action.payload
      );
      if (indexProject !== -1) {
        newState.projects.splice(indexProject, 1);
      }
      return {
        ...state,
        projects: [...newState.projects],
      };
    }

    default: {
      return state;
    }
  }
};
