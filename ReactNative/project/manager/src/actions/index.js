import { EMAIL_CHANGED } from "./type";
export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};
