import { useTodoContext } from "@/context/TodoContext";
import CloseIcon from "@/svgs/closeIcon";

const TodoItem = ({ todo }) => {
  return (
    <div className="flex justify-between items-center group cursor-pointer">
      <div className="flex items-center">
        <div className="w-5 h-5 rounded-full border border-gray-300 mr-4"></div>
        <p className="text-sm sm:text-base">{todo.title}</p>
      </div>
      <div className="w-5 h-5 relative">
        <a id={`delete`} className="absolute top-0 right-0" onClick="">
          <CloseIcon
            className="cursor-pointer
              sm:w-5
              sm:h-5
              dark:text-white
              hover:filter-black
              dark:hover:filter-white
              hover:animate-spin-fast
              invisible
              group-hover:visible
            "
          />
        </a>
      </div>
    </div>
  );
};

export default function TodoList() {
  const { todos } = useTodoContext();
  return (
    <div className="mt-5 sm:mt-7">
      <div className="rounded">
        {todos.map((todo, i) => (
          <div key={i} className="rounded">
            <TodoItem todo={todo} />
          </div>
        ))}
      </div>
    </div>
  );
}
