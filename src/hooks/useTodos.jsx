import { useRecoilValue, useRecoilState } from "recoil";
import { useCallback } from "react";
import shortid from "shortid";

import todoState from "@/recoil/atoms/todo";
import filteredTodoState from "@/recoil/selectors/todo-filter";

import { removeItemAtIndex, replaceItemAtIndex } from "@/utils/array";

const useTodos = () => {
  const todos = useRecoilValue(filteredTodoState);
  const [todoList, setTodoList] = useRecoilState(todoState);


  const addTodo = useCallback(
    (todo) => {
      // todoListに追加する
      setTodoList((oldTodoList) => [
        ...oldTodoList,
        {
          id: todos.length + 1,
          title: todo,
          isDone: false,
        },
      ]);
    },
    [setTodoList]
  );

  // delete item
  const deleteTodo = useCallback(
    (idx) => {
      const newList = removeItemAtIndex(todos, idx);

      setTodoList(newList);
    },
    [setTodoList, todos]
  );

  // change isDone
  const updateTodoIsDone = useCallback(
    (idx, isDone) => {
      const item = todos[idx];
      const newList = replaceItemAtIndex(todos, idx, {
        ...item,
        isDone,
      });

      setTodoList(newList);
    },
    [setTodoList, todos]
  );

  return {
    todos,
    setTodoList,
    addTodo,
    deleteTodo,
    updateTodoIsDone,
  };
};

export default useTodos;
