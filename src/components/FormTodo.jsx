const FormTodo = () => {
    
  return (
    <div className="pt-20">
      <h1 className="font-semibold text-4xl text-slate-600 mb-10">
        What&apos;s the plan for today
      </h1>

      <form className="flex">
        <input
          className="grow rounded-md p-3"
          type="text"
          placeholder="what to do"
        />
        <button className="px-3 py-2 rounded-md bg-sky-700 ml-4 text-white">
          Add
        </button>
      </form>
    </div>
  );
};

export default FormTodo;
