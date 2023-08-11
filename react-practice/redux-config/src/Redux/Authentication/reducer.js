import { AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS } from "./actionTypes";

const initialState = {
  isAuth: false,
  token: "",
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_REQUEST:
      return { ...state, isLoading: true };
    case AUTH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: payload,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: payload,
        isError: false,
      };
    default:
      return state;
  }
};
