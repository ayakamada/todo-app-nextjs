import { useTodoContext } from "@/context/TodoContext";

export default function TodoList() {
  const { todos } = useTodoContext();
  return (
    <div className="mt-5 sm:mt-7">
      <div className="rounded">
        {todos.map((todo, i) => (
          <div key={i} className="rounded">
            {todo.title}
          </div>
        ))}
      </div>
    </div>
  );
}
