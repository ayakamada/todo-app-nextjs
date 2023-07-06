import React, { Fragment, useCallback } from "react";
import { useRecoilValue } from "recoil";
import {
  SortableContainer as sortableContainer,
  SortableElement as sortableElement,
  SortEvent,
  SortEventWithTag,
} from "react-sortable-hoc";

import useTodos from "@/hooks/useTodos";
import filteredTodoState from "@/recoil/selectors/todo-filter";

import CloseIcon from "@/svgs/closeIcon";
import CheckedIcon from "@/svgs/checkedIcon";

const SortableContainer = sortableContainer(({ children }) => {
  return <ul>{children}</ul>;
});

const TodoItem = sortableElement(({ todo, idx, deleteTodo, updateTodoIsDone }) => {
  return (
    <li key={todo.id} className="list-none first:rounded-t last:rounded-b cursor-grab">
      <div className="group transition ease-in-out py-3 pr-8 pl-8 bg-white dark:bg-white  border-b  border-gray-200">
        <div className="flex justify-between items-center text-slate-800 ">
          <div className="flex items-center">
            <a
              id="checkBtn"
              className={`cursor-pointer w-6 h-6 flex items-center justify-center rounded-full border dark:border-white/50  mr-4 hover:border-indigo-500 ${
                todo.isDone ? "bg-gradient-to-r from-cyan-500 to-purple-500 border-0" : ""
              }`}
              onClick={() => updateTodoIsDone(idx, !todo.isDone)}
            >
              <CheckedIcon className={` ${todo.isDone ? "text-white w-4 h-4 mx-auto" : "invisible"}`} />
            </a>
            <p className={`text-sm sm:text-base ${todo.isDone ? "line-through text-slate-600" : ""}`}>{todo.title}</p>
          </div>
          <a id="deleteBtn" className="cursor-pointer w-6 h-6" onClick={() => deleteTodo(idx)}>
            <CloseIcon className="dark:text-slate-700 transition ease-in-out opacity-0 group-hover:opacity-100" />
          </a>
        </div>
      </div>
    </li>
  );
});

export default function TodoList() {
  const todos = useRecoilValue(filteredTodoState);
  const { deleteTodo, updateTodoIsDone, reorderTodo } = useTodos();

  const onSortEnd = useCallback(
    ({ oldIndex, newIndex }) => {
      reorderTodo(oldIndex, newIndex);
    },
    [reorderTodo]
  );

  const shouldCancelStart = useCallback((e) => {
    e.preventDefault();
    //svg要素をクリックした場合はドラッグを開始しない
    if (e.target.tagName === "svg" || e.target.id === "deleteBtn") {
      return true;
    }
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
          <TodoItem
            key={todo.id}
            index={i}
            todo={todo}
            deleteTodo={deleteTodo}
            updateTodoIsDone={updateTodoIsDone}
            idx={i}
          />
        ))}
      </SortableContainer>
    </div>
  );
}
