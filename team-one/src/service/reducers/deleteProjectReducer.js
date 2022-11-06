// Редьюсер на окрытие/закрытие модального окна удаления проекта

import { CLOSE_DELETE_PROJECT_MODAL, OPEN_DELETE_PROJECT_MODAL, REQUEST_DELETE_PROJECT } from "../action";

const initialState = {
  deleteProject: false,
  idProject: {}
};

export const deleteProjectReduce = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_DELETE_PROJECT_MODAL: {
      return {
        ...state,
        deleteProject: true,
      };
    }

    case REQUEST_DELETE_PROJECT: {
      return {
        ...state,
        idProject: action.payload,
      }
    }

    case CLOSE_DELETE_PROJECT_MODAL: {
      return {
        ...state,
        deleteProject: false,
      };
    }
    default: {
      return state;
    }
  }
};
