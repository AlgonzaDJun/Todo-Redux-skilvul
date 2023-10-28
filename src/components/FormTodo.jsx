import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/reducers/todo-reducer";

const FormTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo(input));
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
          Add
        </button>
      </form>
    </div>
  );
};

export default FormTodo;
