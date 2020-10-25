import { GET_TEMPLATE } from "../types/types";

const initialState = {
  template: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TEMPLATE: {
      return {
        ...state,
        template: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
