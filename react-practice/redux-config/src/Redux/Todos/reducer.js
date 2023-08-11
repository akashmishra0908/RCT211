import {
  ADD,
  REDUCE,
  TODO_GET_FAILURE,
  TODO_GET_REQUEST,
  TODO_GET_SUCCESS,
} from "./actionTypes";

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case ADD:
      return { ...state, counter: state.counter + payload };
    case REDUCE:
      return { ...state, counter: state.counter - payload };
    case TODO_GET_REQUEST:
      return { ...state, isLoading: true };
    case TODO_GET_SUCCESS:
      return { ...state, isLoading: false, todos: payload };
    case TODO_GET_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: payload,
      };
    default:
      return state;
  }
};
