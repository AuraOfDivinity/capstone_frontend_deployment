import { GET_ORGANIZATION_LIST } from '../types/types';

const initialState = {
	organizationList: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_ORGANIZATION_LIST: {
			return {
				...state,
				organization: action.payload,
			};
		}
		default: {
			return state;
		}
	}
};
