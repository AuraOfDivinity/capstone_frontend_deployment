import {
  GET_SUBSCRIPTIONS,
  REMOVE_SUBSCRIPTION,
  ADD_SUBSCRIPTION,
  ITEMS_LOADING,
} from "../types/types";
import axios from 'axios';
import { BASE_URL } from '../baseApi';
import { errorHandler } from '../../utils/errorHandler';
import { setRequestStatus } from '../../utils/setRequestStatus';


// Add new subscription
export const addSubscription = (subscription) => async (dispatch) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/subscriptions/`, subscription);
    dispatch(setRequestStatus(false));

    if (res.status === 200) {
			dispatch(setRequestStatus(true));
			dispatch({
				type: ADD_SUBSCRIPTION,
				payload: res.data
			})
    }
  } catch (error) {
    console.log("Could not add subscription ", error);
    dispatch(errorHandler(error));
  }
};

// Get all subscriptions
export const getSubscriptions = () => async (dispatch) => {
	dispatch(setItemsLoading());
	try {
    const res = await axios.get(`${BASE_URL}/api/subscriptions`);
    dispatch(setRequestStatus(false));

    if (res.status === 200) {
      dispatch(setRequestStatus(true));
      dispatch({
        type : GET_SUBSCRIPTIONS,
        payload : res.data.data
      });
    }
  } catch (error) {
    console.log("Retrive subscriptions error ", error);
    dispatch(errorHandler(error));
  }
};


// View specific subscription
export const viewSubscription = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${BASE_URL}/api/subscriptions/`,id);
    dispatch(setRequestStatus(false));

    if (res.status === 200) {
      dispatch(setRequestStatus(true));
    }
  } catch (error) {
    console.log("Get subscription error ", error);
    dispatch(errorHandler(error));
  }
};

// Update subscriptions
export const updateSubscription = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`${BASE_URL}/api/subscriptions/` + id);
    dispatch(setRequestStatus(false));

    if (res.status === 200) {
      dispatch(setRequestStatus(true));
    }
  } catch (error) {
    console.log("Update subscription error ", error);
    dispatch(errorHandler(error));
  }
};


// Cancel subscriptions
export const deleteSubscription = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(
      `${BASE_URL}/api/subscriptions/${id}` 
    );
    dispatch(setRequestStatus(false));

    if (res.status === 200) {
			dispatch(setRequestStatus(true));
			dispatch({
				type: REMOVE_SUBSCRIPTION,
				payload: id,
			})
    }
  } catch (error) {
    console.log("Cancel subscription error ", error);
    dispatch(errorHandler(error));
	}
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING,
  };
};
