import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todoSlice";

function Todos() {
    console.log(useSelector((state) => state.todos));
    
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch()
  const HandleDelete = (id) => {
    dispatch(removeTodo(id));
  };
  return (
    <div className="todos-container">
      <h3>Todos</h3>
      {todos.map((e, index) => (
        <li key={e.id}>
          <span>{ index+1 }. </span>
          { e.text }<button onClick={() => HandleDelete(e.id)}>Delete</button>
        </li>
      ))}
    </div>
  );
}

export default Todos;
