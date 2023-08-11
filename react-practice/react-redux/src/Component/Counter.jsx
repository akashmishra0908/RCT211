import React from "react";
import { useState } from "react";
import { store } from "../Redux/store";
import { addAction, reduceAction } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";

export const Counter = () => {
  const counter = useSelector((store) => store.counter);
  // let { dispatch, getState, subscribe } = store;

  // subscribe(() => {
  //   console.log("Notification");
  //   setForceFulRender((prev) => prev + 1);
  // });

  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addAction());
    // console.log(getState());
  };

  const handleReduce = () => {
    dispatch(reduceAction());
    // console.log(getState());
  };

  return (
    <div>
      <h1>Counter:{counter}</h1>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
};
