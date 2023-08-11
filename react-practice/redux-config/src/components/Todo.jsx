import React, { useEffect } from "react";
import { TodoInput } from "./TodoInput";
import { useDispatch, useSelector } from "react-redux";
import {
  getTodoFailureAction,
  getTodoRequestAction,
  getTodoSuccessAction,
} from "../Redux/action";

export const Todo = () => {
  const todos = useSelector((store) => store.todos);
  const isLoading = useSelector((store) => store.isLoading);
  const isError = useSelector((store) => store.isError);
  const errMessage = useSelector((store) => {
    store.errMessage;
  });

  const dispatch = useDispatch();

  const getTodos = () => {
    dispatch(getTodoRequestAction());
    axios
      .get("http://localhost:8080/todos")
      .then((res) => {
        dispatch(getTodoSuccessAction(res.data));
        console.log(res.data);
      })
      .catch((err) => {
        dispatch(getTodoFailureAction(err.message));
        console.log(err.message);
      });
  };
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <TodoInput />
      {todos.map((el) => {
        return (
          <h3 key={el.id}>
            {el.title} - {el.status ? "TRUE" : "FALSE"}
          </h3>
        );
      })}
    </div>
  );
};
