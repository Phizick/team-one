import { TEST_ACTION } from "../action";

const initialState = {
  data: [],
};

export const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST_ACTION: {
      return {
        ...state,
        data: [...state.data],
      };
    }
    default: {
      return state;
    }
  }
};
