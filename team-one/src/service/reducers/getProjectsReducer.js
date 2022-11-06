import { ERROR_PROJECTS, REQUEST_PROJECTS, SUCCESS_PROJECTS } from "../action";

const initialState = {
  projects: [],
  success: false,
  error: '',
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
    default: {
      return state;
    }
  }
};
