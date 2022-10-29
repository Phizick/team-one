import { CLOSE_USER_INFO_MODAL, OPEN_USER_INFO_MODAL } from "../action";

const initialState = {
  userName: "",
  openUserModal: false,
};

export const userInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_USER_INFO_MODAL: {
      return {
      ...state,
        userName: action.payload,
        openUserModal: true,
      };
    }
    case CLOSE_USER_INFO_MODAL: {
      return {
        ...state,
        userName: "",
        openUserModal: false,
      };
    }
    default: {
      return state;
    }
  }
};
