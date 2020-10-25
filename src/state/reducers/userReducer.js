import { GET_USER_PROFILE } from "../types/types";

const initialState = {
  userProfile: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_PROFILE: {
      return {
        ...state,
        userValidated: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
