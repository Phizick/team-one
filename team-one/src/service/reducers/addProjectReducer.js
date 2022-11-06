import { REQUEST_ADD_PROJECT, ERROR_ADD_PROJECT } from "../action";
const initialState = {
  projectId: {},
  success: false,
  data: {},
  error: "",
};

export const addProjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_ADD_PROJECT: {
      return {
        data: action.data,
        projectId: action.payload,
        success: true,
        error: "",
      };
    }
    case ERROR_ADD_PROJECT: {
      return {
        data: action.data,
        projectId: {},
        success: false,
        error: `${action.payload}`,
      };
    }
    default: {
      return state;
    }
  }
};
