import { combineReducers } from "redux";
import authReducers from "./authReducer";
import errorReducer from "./errorReducer";
import requestStatus from "./requestStatus";
import userReducer from "./userReducer";
import organizationReducer from "./organizationReducer";
import subscriptionReducer from "./subscriptionReducer";
import templateReducer from "./templateReducer";
import getTemplateReducer from "./getTemplateReducer";
import documentReducer from "./documentReducer";
import notificationReducer from "./notificationReducer";
import reportReducer from "./reportReducer";

const rootReducer = combineReducers({
  auth: authReducers,
  error: errorReducer,
  status: requestStatus,
  user: userReducer,
  organization: organizationReducer,
  subscription: subscriptionReducer,
  templates: templateReducer,
  template: getTemplateReducer,
  documents: documentReducer,
  notifications: notificationReducer,
  reports: reportReducer,
});

export default rootReducer;
