import React from "react";
import { useState } from "react";
import { store } from "../Redux/store";
import { addAction, reduceAction } from "../Redux/action";

export const Counter = () => {
  //   let [count, setCount] = useState(0);

  //   let ourStore = store;
  let { dispatch, getState } = store;
  //   console.log(ourStore);
  console.log(getState());

  const handleAdd = () => {
    // setCount((prev) => prev + 1);
    // dispatch({ type: "ADD", payload: 1 });
    dispatch(addAction());
    console.log(getState());
  };

  const handleReduce = () => {
    // setCount((prev) => prev - 1);
    // dispatch({ type: "REDUCE", payload: 1 });
    dispatch(reduceAction());
    console.log(getState());
  };

  return (
    <div>
      <h1>Counter:{getState().count}</h1>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
};
