import {
  ADD,
  REDUCE,
  TODO_GET_FAILURE,
  TODO_GET_REQUEST,
  TODO_GET_SUCCESS,
} from "./actionTypes";

export const addAction = () => {
  //Logic
  return { type: ADD, payload: 1 };
};

export const reduceAction = () => {
  return { type: REDUCE, payload: 1 };
};

// TODOS
export const getTodoRequestAction = () => {
  return { type: TODO_GET_REQUEST };
};

export const getTodoSuccessAction = (payload) => {
  return { type: TODO_GET_SUCCESS, payload };
};

export const getTodoFailureAction = (payload) => {
  return { type: TODO_GET_FAILURE, payload };
};
