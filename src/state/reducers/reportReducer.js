import { SET_REPORTS } from "../types/types";

const initialState = {
  documents: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_REPORTS: {
      return {
        ...state,
        reports: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
