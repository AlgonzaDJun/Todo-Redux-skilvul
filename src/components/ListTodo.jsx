const ListTodo = () => {
  return (
    <div className="max-w-md bg-slate-300">
      <div className="flex gap-3 mt-10 mb-3">
        {/* filter todos */}
        <button className="py-1 px-3 bg-gray-500 rounded-2xl text-white hover:bg-gray-700">
          all
        </button>
        <button className="py-1 px-3 bg-gray-500 rounded-2xl text-white hover:bg-gray-700">
          active
        </button>
        <button className="py-1 px-3 bg-emerald-500 hover:bg-emerald-700 rounded-2xl text-white">
          completed
        </button>
      </div>

      {/* list todo */}
      <ul className="flex flex-col mt-8 gap-6">
        <li className=" grow border-2 p-2 border-slate-400 flex gap-3 items-center">
          <button className="border-2 p-2 border-slate-400"></button>
          <p className="grow text-xl cursor-pointer text-slate-700">
            beli sate
          </p>
          <div className="icon flex gap-2 items-center">
            <button id="edit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
              </svg>
            </button>

            <button id="delete">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ListTodo;
