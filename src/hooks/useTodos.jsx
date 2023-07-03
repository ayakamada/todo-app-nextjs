import { useRecoilValue, useRecoilState } from "recoil";
import { useCallback } from "react";
import shortid from "shortid";

import todoState from "@/recoil/atoms/todo";
import filteredTodoState from "@/recoil/selectors/todo-filter";

import { removeItemAtIndex } from "@/utils/array";

const useTodos = () => {
  const todos = useRecoilValue(filteredTodoState);
  const [todoList, setTodoList] = useRecoilState(todoState);


  const addTodo = useCallback(
    (todo) => {
      // todoListに追加する
      setTodoList((oldTodoList) => [
        ...oldTodoList,
        {
          id: shortid.generate(),
          title: todo,
          isDone: false,
        },
      ]);
    },
    [setTodoList]
  );

  const deleteTodo = useCallback(
    (idx) => {
      const newList = removeItemAtIndex(todos, idx);

      setTodoList(newList);
    },
    [setTodoList, todos]
  );

  return {
    todos,
    setTodoList,
    addTodo,
    deleteTodo,
  };
};

export default useTodos;
