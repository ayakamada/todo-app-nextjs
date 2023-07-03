import { useTodoContext } from "@/context/TodoContext";
import useTodos from "@/hooks/useTodos";

import CloseIcon from "@/svgs/closeIcon";
import CheckedIcon from "@/svgs/checkedIcon";

const TodoItem = ({ todo }) => {
  const { deleteTodo } = useTodos();
  return (
    <div className="flex justify-between items-center  ">
      <div className="flex items-center">
        <div
          className={`w-6 h-6 rounded-full border dark:border-white/50  mr-4 hover:border-indigo-500 ${
            todo.isDone ? "bg-gradient-to-r from-cyan-500 to-purple-500 border-0" : ""
          }`}
        >
          <CheckedIcon className={` ${todo.isDone ? " " : "invisible"}`} />
        </div>
        <p className="text-sm sm:text-base">{todo.title}</p>
      </div>
      <div className="w-5 h-5 relative">
        <a id={`delete`} className="absolute top-0 right-0" onClick="">
          <CloseIcon
            className="
              sm:w-6
              sm:h-6
              dark:text-white
              hover:filter-black
              dark:hover:filter-white
              hover:animate-spin-fast
              transition ease-in-out
              opacity-0
              group-hover:opacity-100
            "
          />
        </a>
      </div>
    </div>
  );
};

export default function TodoList() {
  const { todos } = useTodos();
  return (
    <div className="mt-5 sm:mt-7">
      <div className="rounded">
        {todos.map((todo, i) => (
          <div
            key={i}
            className="group transition ease-in-out cursor-pointer py-4 sm:py-4.5 pr-8 pl-8 dark:bg-gray-800 first:rounded-t last:rounded-b border-b border-gray-600"
          >
            <TodoItem todo={todo} />
          </div>
        ))}
      </div>
    </div>
  );
}
