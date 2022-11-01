import { OPEN_RECOMMENDATIONS } from "../action";

const initialState = {
  recommendations: false,
};

export const recommendationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_RECOMMENDATIONS: {
      return {
        recommendations: true,
      };
    }
    default: {
      return state;
    }
  }
};
