import axios from "axios";
import { SET_DOCUMENT, NEW_NOTIFICATION } from "../types/types";
import { BASE_URL } from "../baseApi";
import { errorHandler } from "../../utils/errorHandler";
import { setRequestStatus } from "../../utils/setRequestStatus";

// Add a document
export const addDocument = (documentInfo) => async (dispatch) => {
  try {
    dispatch(getDocuments());
    dispatch(setRequestStatus(true));
    dispatch({
      type: NEW_NOTIFICATION,
      message: "Document added successfully",
      notificationType: "success",
    });
  } catch (error) {
    console.log("Add Document error ", error);
    dispatch({
      type: NEW_NOTIFICATION,
      message: "Error Adding documents from the server",
      notificationType: "failure",
    });
    dispatch(errorHandler(error));
  }
};

//Get documents
export const getDocuments = () => async (dispatch) => {
  try {
    const res = await axios.get(`${BASE_URL}/api/document/documentList`);
    dispatch(setRequestStatus(false));

    if (res.status === 200) {
      dispatch(setRequestStatus(true));
      dispatch({
        type: SET_DOCUMENT,
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

//Delete document
export const deleteDocument = (documentID) => async (dispatch) => {
  try {
    console.log(documentID);
    const res = await axios.delete(`${BASE_URL}/api/document/` + documentID);
    dispatch(setRequestStatus(false));

    if (res.status === 200) {
      dispatch(getDocuments());
      dispatch({
        type: NEW_NOTIFICATION,
        message: "Document deleted successfully!",
        notificationType: "success",
      });
      dispatch(setRequestStatus(true));
    }
  } catch (error) {
    console.log("Delete Document error ", error);
    dispatch({
      type: NEW_NOTIFICATION,
      message: "Error Deleting documents from the server",
      notificationType: "failure",
    });
    dispatch(errorHandler(error));
  }
};

//Validate document
export const validateDocument = (valInfo) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${BASE_URL}/api/document/valDocument`,
      valInfo
    );
    dispatch(setRequestStatus(false));

    if (res.status === 200) {
      dispatch(setRequestStatus(true));
      dispatch({
        type: NEW_NOTIFICATION,
        message:
          "Document validated successfully. Please find the generated report on the my reports section",
        notificationType: "success",
      });
    }
  } catch (error) {
    console.log("Validate Document error ", error);
    dispatch(errorHandler(error));
  }
};
