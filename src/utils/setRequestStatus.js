import { SET_STATUS } from "../state/types/types";

export const setRequestStatus = (status) => {
  return {
    type: SET_STATUS,
    payload: status,
  };
};
