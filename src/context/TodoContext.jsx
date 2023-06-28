import React, { createContext, useState, useContext } from "react";
import InitialTodo from "@/data/InitialTodoList.json";

export const TodoContext = createContext();

export function useTodoContext() {
  return useContext(TodoContext);
}

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState(InitialTodo);

  const value = {
    todos,
    setTodos,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}
