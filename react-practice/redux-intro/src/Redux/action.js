import { ADD, REDUCE } from "./actionTypes";

export const addAction = () => {
  //Logic
  return { type: ADD, payload: 1 };
};

export const reduceAction = () => {
  return { type: REDUCE, payload: 1 };
};
