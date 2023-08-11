import { AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS } from "./actionTypes";

export const authRequest = () => {
  return { type: AUTH_REQUEST };
};

export const authFailure = (payload) => {
  return { type: AUTH_FAILURE, payload };
};

export const authSuccess = (payload) => {
  return { type: AUTH_SUCCESS, payload };
};
