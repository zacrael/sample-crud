import { NOTIFY_USER, USER_LOADING } from "./types";

export const notifyUser = (message, messageType) => {
  return {
    type: NOTIFY_USER,
    message,
    messageType
  };
};
export const loadings = () => {
  return {
    type: USER_LOADING
  };
};
