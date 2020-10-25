import { NEW_NOTIFICATION } from "../types/types";

const initialState = {
  notificationId: 0,
  notificationMessage:'',
  notificationType: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_NOTIFICATION: {
      return {
        notificationId: state.notificationId + 1,
        notificationMessage: action.message,
        notificationType: action.notificationType
      };
    }
    default: {
      return state;
    }
  }
};