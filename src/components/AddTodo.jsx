import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";

function AddTodo() {
    const [text, settext] = useState("");
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(text));
        settext('');
    }
  return (
      <form onSubmit={addTodoHandler}>
          <label htmlFor="text"> Enter Text : </label>
      <input
        type="text"
              id="text"
              placeholder="Text"
        value={text}
        onChange={(e) => settext(e.target.value)}
      />
      <button type="submit"> Add</button>
    </form>
  );
}

export default AddTodo;
