import { SET_ERROR } from "../state/types/types";

export const errorHandler = (error) => {
  return {
    type: SET_ERROR,
    payload: error.message,
  };
};
