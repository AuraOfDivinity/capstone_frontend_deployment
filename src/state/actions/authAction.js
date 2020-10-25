import {
	//GET_USER_PROFILE,
	SET_CURRENT_USER,
	GET_USER_DETAILS,
	GET_INSTITUTE_NAME,
	UPDATE_ADMIN_DETAILS,
	NEW_NOTIFICATION,
} from '../types/types';
import axios from 'axios';
import { BASE_URL } from '../baseApi';
import { errorHandler } from '../../utils/errorHandler';
import { setRequestStatus } from '../../utils/setRequestStatus';
import { setAuthToken } from '../../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

//Registering a new admin

export const registerAdmin = (userInfo) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${BASE_URL}/api/auth/admin-register`,
      userInfo
    );
    dispatch(setRequestStatus(false));

    if (res.status === 200) {
      console.log("Res data in register admin", res.data);
      dispatch(setRequestStatus(true));
    }
  } catch (error) {
    console.log("register error ", error);
    dispatch(errorHandler(error));
  }
};

export const getAdminDetails = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${BASE_URL}/api/admins/getAdminDetails/${id}`);
    dispatch(setRequestStatus(false));

    if (res.status === 200) {
      dispatch(setRequestStatus(true));

      console.log(res.data);

      dispatch({
        type: GET_USER_DETAILS,
        payload: res.data,
      });
    }
  } catch (error) {
    console.log("register error ", error);
    dispatch(errorHandler(error));
  }
};

// Regsitering a new user
export const registerUser = (userInfo) => async (dispatch) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/auth/register`, userInfo);
    dispatch(setRequestStatus(false));

    if (res.status === 200) {
      dispatch(setRequestStatus(true));
    }
  } catch (error) {
    console.log("register error ", error);
    dispatch(errorHandler(error));
  }
};

// Confirming the OTP of a user
export const confirmOtp = (otpInfo) => async (dispatch) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/auth/verify-otp`, otpInfo);
    dispatch(setRequestStatus(false));

    if (res.status === 200) {
      dispatch(setRequestStatus(true));
     /* dispatch({
        type: GET_USER_PROFILE,
        payload: res.data.status,
			});*/
			console.log("Res data in confirm otp", res.data);
      
    }
  } catch (error) {
    console.log("register error ", error);
    dispatch(errorHandler(error));
  }
};

// Authenticating a user
export const loginUser = (userInfo, history) => async (dispatch) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/auth/login`, userInfo);
    dispatch(setRequestStatus(false));

    if (res.status === 200) {
      dispatch(setRequestStatus(true));
      const token = res.data.data.token;

      localStorage.setItem("jwtToken", token);
      setAuthToken(token);

      const decodedData = await jwt_decode(token);
      localStorage.setItem("userId", decodedData._id);

      dispatch(setCurrentUser(decodedData));
      if (res.data.data.role === "admin") {
        history.push("/admin/dashboard");
      } else {
        history.push("/staff/dashboard");
      }
    }
  } catch (error) {
    console.log("register error ", error);
    dispatch(errorHandler(error));
  }
};

export const getUserDetails = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${BASE_URL}/api/auth/getUserDetails`, id);
    dispatch(setRequestStatus(false));

    if (res.status === 200) {
      dispatch(setRequestStatus(true));

      console.log(res.data);

      dispatch({
        type: GET_USER_DETAILS,
        payload: res.data,
      });
    }
  } catch (error) {
    console.log("register error ", error);
    dispatch(errorHandler(error));
  }
};

export const setCurrentUser = (decodedData) => {
  return {
    type: SET_CURRENT_USER,
    payload: decodedData,
  };
};

export const getInstituteName = (userId) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${BASE_URL}/api/institute/getInstituteName`,
      userId
    );
    dispatch(setRequestStatus(false));

    if (res.status === 200) {
      dispatch(setRequestStatus(true));

      console.log(res.data);

      dispatch({
        type: GET_INSTITUTE_NAME,
        payload: res.data,
      });
    }
  } catch (error) {
    console.log("register error ", error);
    dispatch(errorHandler(error));
  }
};

export const adminUpdate = (userId, updatedDetails) => async (dispatch) => {
	try {
		const res = await axios.put(
			`${BASE_URL}/api/auth/adminUpdate/${userId}`,
			updatedDetails
		);
		dispatch(setRequestStatus(false));

		if (res.status === 200) {
			dispatch(setRequestStatus(true));

			console.log(res.data);

			dispatch({
				type: UPDATE_ADMIN_DETAILS,
				payload: res.data,
			});

			dispatch({
				type: NEW_NOTIFICATION,
				message: 'Profile successfully updated',
				notificationType: 'success'
			})
		}
	} catch (error) {
		console.log('update error ', error);
		dispatch(errorHandler(error));
	}
};
