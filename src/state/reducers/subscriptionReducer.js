import { GET_SUBSCRIPTIONS, REMOVE_SUBSCRIPTION, ADD_SUBSCRIPTION, ITEMS_LOADING } from "../types/types";

const initialState = {
	subscriptions: {},
};

export default (state = initialState, action) => {
	switch (action.type) {
    case GET_SUBSCRIPTIONS: 
      return {
        ...state,
				subscriptions: action.payload,
				loading: false,
      };
		case REMOVE_SUBSCRIPTION:
			return {
				...state,
				subscriptions: state.subscriptions.filter(subscription => subscription._id === action.payload),
			}
		case ADD_SUBSCRIPTION:
			return {
				...state,
				subscriptions: [action.payload, ...state.subscriptions]
			}
		case ITEMS_LOADING:
			return {
				...state,
				loading: true,
			}
    default: {
      return state;
    }
  }
};
