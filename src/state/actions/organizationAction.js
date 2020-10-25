import { GET_ORGANIZATION_LIST } from '../types/types';
import axios from 'axios';
import { BASE_URL } from '../baseApi';
import { errorHandler } from '../../utils/errorHandler';
import { setRequestStatus } from '../../utils/setRequestStatus';

export const getcompanyList = () => async (dispatch) => {
	try {
		const res = await axios.get(`${BASE_URL}/api/institute/getInstituteList`);
		dispatch(setRequestStatus(false));

		if (res.status === 200) {
			dispatch(setRequestStatus(true));

			console.log(res.data);

			dispatch({
				type: GET_ORGANIZATION_LIST,
				payload: res.data,
			});
		}
	} catch (error) {
		console.log('register error ', error);
		dispatch(errorHandler(error));
	}
};
