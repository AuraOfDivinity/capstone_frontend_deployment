import axios from "axios";
import { SET_TEMPLATE } from "../types/types";
import { GET_TEMPLATE, NEW_NOTIFICATION, UPDATE_TEMPLATE } from "../types/types";
import { BASE_URL } from "../baseApi";
import { errorHandler } from "../../utils/errorHandler";
import { setRequestStatus } from "../../utils/setRequestStatus";

// Adding a new template
export const addTemplate = (templateInfo) => async (dispatch) => {
  try {
    dispatch(setRequestStatus(true));
    dispatch({
      type: NEW_NOTIFICATION,
      message: "Template added successfully",
      notificationType: "success",
    });
    dispatch(getTemplates());
  } catch (error) {
    dispatch({
      type: NEW_NOTIFICATION,
      message: "Error adding new template",
      notificationType: "failure",
    });
    dispatch(errorHandler(error));
  }
};

//action to get templates
export const getTemplates = () => async (dispatch) => {
  try {
    const res = await axios.get(`${BASE_URL}/api/template/templateList`);
    dispatch(setRequestStatus(false, "Error"));

    if (res.status === 200) {
      dispatch(setRequestStatus(true));
      dispatch({
        type: SET_TEMPLATE,
        payload: res.data.data,
      });
    }
  } catch (error) {
    dispatch(errorHandler(error));
  }
};

//action to get templates
export const getStaffTemplates = () => async (dispatch) => {
  try {
    const res = await axios.get(`${BASE_URL}/api/template/staffTemplateList`);
    dispatch(setRequestStatus(false, "Error"));

    if (res.status === 200) {
      dispatch(setRequestStatus(true));
      dispatch({
        type: SET_TEMPLATE,
        payload: res.data.data,
      });
    }
  } catch (error) {
    dispatch(errorHandler(error));
  }
};

export const deleteTemplate = (templateID) => async (dispatch) => {
  try {
    const res = await axios.delete(`${BASE_URL}/api/template/` + templateID);
    dispatch(setRequestStatus(false));

    if (res.status === 200) {
      dispatch(getTemplates());
      dispatch(setRequestStatus(true));
      dispatch({
        type: NEW_NOTIFICATION,
        message: "Template deleted successfully",
        notificationType: "success",
      });
    }
  } catch (error) {
    dispatch({
      type: NEW_NOTIFICATION,
      message: "Error deleting template",
      notificationType: "failure",
    });
    dispatch(errorHandler(error));
  }
};

export const updateTemplate = (templateID, templateInfo) => async (
  dispatch
) => {
  try {
    const res = await axios.put(
      `${BASE_URL}/api/template/${templateID}`,
      templateInfo
    );
    dispatch(setRequestStatus(false));

    if (res.status === 200) {
      dispatch({
        type : UPDATE_TEMPLATE,
        payload: res.data,
      });
      dispatch(setRequestStatus(true));
      dispatch({
        type: NEW_NOTIFICATION,
        message: "Template updated successfully",
        notificationType: "success",
      });
      
      dispatch(getTemplates());
    }
  } catch (error) {
    dispatch({
      type: NEW_NOTIFICATION,
      message: "Error updating template",
      notificationType: "failure",
    });
    dispatch(errorHandler(error));
  }
};

export const getTemplateInfo = (templateID) => async (dispatch) => {
  try {
    const res = await axios.get(`${BASE_URL}/api/template/` + templateID);
    dispatch(setRequestStatus(false));

    if (res.status === 200) {
      dispatch(setRequestStatus(true));
      dispatch({
        type: GET_TEMPLATE,
        payload: res.data,
      });
    }
  } catch (error) {
    dispatch(errorHandler(error));
    dispatch({
      type: NEW_NOTIFICATION,
      message: "Error fetching the specified template",
      notificationType: "failure",
    });
  }
};
