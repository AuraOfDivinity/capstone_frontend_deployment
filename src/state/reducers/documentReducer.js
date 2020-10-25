import { SET_DOCUMENT } from "../types/types";

const initialState = {
  documents: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DOCUMENT: {
      return {
        ...state,
        documents: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
