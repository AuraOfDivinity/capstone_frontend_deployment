import axios from "axios";
import { SET_REPORTS, NEW_NOTIFICATION } from "../types/types";
import { BASE_URL } from "../baseApi";
import { errorHandler } from "../../utils/errorHandler";
import { setRequestStatus } from "../../utils/setRequestStatus";

// Get all reports of a user
export const getReports = () => async (dispatch) => {
  try {
    const res = await axios.get(`${BASE_URL}/api/report/allreports`);
    dispatch(setRequestStatus(false));

    if (res.status === 200) {
      dispatch(setRequestStatus(true));
      dispatch({
        type: SET_REPORTS,
        payload: res.data.data,
      });
    }
  } catch (error) {
    console.log("Get Document error ", error);
    dispatch({
      type: NEW_NOTIFICATION,
      message: "Error Fetching documents from the server",
      notificationType: "failure",
    });
    dispatch(errorHandler(error));
  }
};

export const deleteReport = (reportId) => async (dispatch) => {
  try {
    const res = await axios.delete(`${BASE_URL}/api/report/` + reportId);
    dispatch(setRequestStatus(false));

    if (res.status === 200) {
      dispatch(getReports());
      dispatch({
        type: NEW_NOTIFICATION,
        message: "Report deleted successfully!",
        notificationType: "success",
      });
      dispatch(setRequestStatus(true));
    }
  } catch (error) {
    dispatch({
      type: NEW_NOTIFICATION,
      message: "Error Deleting Report from the server",
      notificationType: "failure",
    });
    dispatch(errorHandler(error));
  }
};
