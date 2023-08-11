import React, { useState } from "react";

export const TodoInput = () => {
  const [title, setTitle] = useState("");
  const newTodo = {
    title,
    status: false,
    };
    
    const handleAdd = () => {
    
}

  return (
    <div>
      <input type="text" onChange={(e) => setTitle(e.target.value)} />
      <button onClick={handleAdd}>Add Todo</button>
    </div>
  );
};
