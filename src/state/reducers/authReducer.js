import { SET_CURRENT_USER,UPDATE_ADMIN_DETAILS } from '../types/types';

const initialState = {
	isAuthenticated: false,
	isAdmin: false,
	user: {},
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_CURRENT_USER: {
			return {
				...state,
				isAuthenticated: Boolean(
					typeof action.payload === 'object' &&
						Object.keys(action.payload).length !== 0
				),
				user: action.payload,
			};
		}

		case UPDATE_ADMIN_DETAILS: {
			return{
				...state,
				user: action.payload
			}
		}
		default: {
			return state;
		}
	}
};
