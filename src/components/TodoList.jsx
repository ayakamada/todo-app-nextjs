import { useTodoContext } from "@/context/TodoContext";

export default function TodoList() {
  const { todos, setTodos } = useTodoContext();
  return (
    <div className="mt-5 sm:mt-7">
      <div className="rounded">
        {todos.map((todo) => (
          <div key={todo.id} className="rounded">
            {todo.title}
          </div>
        ))}
      </div>
    </div>
  );
}
