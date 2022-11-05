// Редьюсер на окрытие/закрытие модального окна PDF

import { CLOSE_PDF_MODAL, OPEN_PDF_MODAL } from "../action";

const initialState = {
  pdfModal: false,
};

export const pdfModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_PDF_MODAL: {
      return {
        ...state,
        pdfModal: true,
      };
    }
    case CLOSE_PDF_MODAL: {
      return {
        ...state,
        pdfModal: false,
      };
    }
    default: {
      return state;
    }
  }
};
