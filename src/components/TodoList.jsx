import React, { Fragment, useCallback } from "react";
import {
  SortableContainer as sortableContainer,
  SortableElement as sortableElement,
  SortEvent,
  SortEventWithTag,
} from "react-sortable-hoc";

import useTodos from "@/hooks/useTodos";

import CloseIcon from "@/svgs/closeIcon";
import CheckedIcon from "@/svgs/checkedIcon";

const SortableContainer = sortableContainer(({ children }) => {
  return <ul>{children}</ul>;
});

const TodoItem = sortableElement(({ todo, idx, deleteTodo, updateTodoIsDone }) => {
  return (
    <li key={todo.id} className="list-none first:rounded-t last:rounded-b">
      <div className="group transition ease-in-out cursor-pointer py-4 sm:py-4.5 pr-8 pl-8 bg-white dark:bg-white  border-b  border-gray-200">
        <div className="flex justify-between items-center text-slate-800 ">
          <div className="flex items-center">
            <div
              id="checkBtn"
              className={`w-6 h-6 flex items-center justify-center rounded-full border dark:border-white/50  mr-4 hover:border-indigo-500 ${
                todo.isDone ? "bg-gradient-to-r from-cyan-500 to-purple-500 border-0" : ""
              }`}
              onClick={() => updateTodoIsDone(idx, !todo.isDone)}
            >
              <CheckedIcon className={` ${todo.isDone ? "text-white w-4 h-4 mx-auto" : "invisible"}`} />
            </div>
            <p className="text-sm sm:text-base">{todo.title}</p>
          </div>
          <div className="w-5 h-5 relative">
            <a id={`delete`} className="absolute top-0 right-0" onClick={() => deleteTodo(idx)}>
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
      </div>
    </li>
  );
});

export default function TodoList() {
  const { todos, deleteTodo, updateTodoIsDone, reorderTodo } = useTodos();

  const onSortEnd = useCallback(
    ({ oldIndex, newIndex }) => {
      reorderTodo(oldIndex, newIndex);
    },
    [reorderTodo]
  );

  const shouldCancelStart = useCallback((e) => {
    // クリックした要素のIDが”checkBtn”場合はドラッグを開始しない
    if (e.target.id === "checkBtn") {
      return true;
    }

    return false;
  }, []);

  return (
    <div className="mt-5 sm:mt-7">
      <SortableContainer onSortEnd={onSortEnd} shouldCancelStart={shouldCancelStart}>
        {todos.map((todo, i) => (
          <TodoItem index={i} todo={todo} deleteTodo={deleteTodo} updateTodoIsDone={updateTodoIsDone} idx={i} />
        ))}
      </SortableContainer>
    </div>
  );
}
