import { CLOSE_DELETE_PROJECT_MODAL, OPEN_DELETE_PROJECT_MODAL } from "../action";

const initialState = {
  deleteProject: false,
};

export const deleteProjectReduce = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_DELETE_PROJECT_MODAL: {
      return {
        deleteProject: true,
      };
    }
    case CLOSE_DELETE_PROJECT_MODAL: {
      return {
        deleteProjectReduce: false,
      };
    }
    default: {
      return state;
    }
  }
};