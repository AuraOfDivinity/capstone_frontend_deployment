import { SET_TEMPLATE, APPEND_TEMPLATE, UPDATE_TEMPLATE } from "../types/types";

const initialState = {
  templates: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TEMPLATE: {
      return {
        ...state,
        templates: action.payload,
      };
    }
    case APPEND_TEMPLATE: {
      return {
        ...state,
        templates: [...state.templates, action.payload],
      };
    }
    case UPDATE_TEMPLATE: {
      return {
        ...state,
        templates: [...state.templates, action.payload],
      };
    }
    default: {
      return state;
    }
  }
};
