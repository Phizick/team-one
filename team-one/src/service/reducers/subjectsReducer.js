// Редьюсер на окрытие/закрытие модального окна субъектов и добавления/удаления субъекта

import {
  ADD_SUBJECTS,
  CLEAR_SUBJECTS,
  CLOSE_ALL_SUBJECTS_MODAL,
  DELETE_SUBJECTS,
  OPEN_ALL_SUBJECTS_MODAL,
} from "../action";

const initialState = {
  subjectsModal: false,
  subjects: [],
};

export const subjectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_ALL_SUBJECTS_MODAL: {
      return {
        ...state,
        subjectsModal: true,
      };
    }
    case CLOSE_ALL_SUBJECTS_MODAL: {
      return {
        ...state,
        subjectsModal: false,
      };
    }

    case ADD_SUBJECTS: {
      return {
        ...state,
        subjects: [...state.subjects, action.payload],
      };
    }
    case DELETE_SUBJECTS: {
      const newState = { ...state };
      const indexSubject = newState.subjects.findIndex(
        (item) => item.id === action.indx
      );
      if (indexSubject !== -1) {
        newState.subjects.splice(indexSubject, 1);
      }
      return {
        ...state,
        subjects: [...newState.subjects],
      };
    }
    case CLEAR_SUBJECTS: {
      return { ...state, subjects: [] };
    }
    default: {
      return state;
    }
  }
};
