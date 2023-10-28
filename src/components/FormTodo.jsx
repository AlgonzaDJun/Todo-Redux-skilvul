/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, editTodo } from "../redux/reducers/todo-reducer";
import ListTodo from "./listTodo";

const FormTodo = () => {
  const { isEdit, todos } = useSelector((state) => state.todos);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isEdit) {
      dispatch(addTodo(input));
    } else {
      dispatch(editTodo(input));
    }
    setInput("");
  };

  return (
    <div className="pt-20">
      <h1 className="font-semibold text-4xl text-slate-600 mb-10">
        What&apos;s the plan for today
      </h1>

      <form className="flex">
        <input
          className="grow rounded-md p-3 border-2 border-slate-400 bg-transparent text-slate-700"
          type="text"
          placeholder="what to do"
          value={input}
          onChange={handleChange}
        />
        <button
          className="px-3 py-2 rounded-md bg-sky-700 hover:bg-sky-900 ml-4 text-white"
          onClick={handleSubmit}
        >
          {isEdit ? "Edit" : "Add"}
        </button>
      </form>

      <ListTodo setInput={setInput} />
    </div>
  );
};

export default FormTodo;
