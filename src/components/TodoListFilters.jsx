import { useCallback } from "react";
import { useRecoilState } from "recoil";

import todoFilterState from "@/recoil/atoms/todo-filter";

const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoFilterState);

  const updateFilter = useCallback(
    (value) => {
      setFilter(value);
    },
    [setFilter]
  );

  return (
    <div className="text-sm sm:text-base text-gray-300 dark:text-white font-bold text-center">
      <span
        className={`px-3 sm:px-2 hover:text-gray-700 dark:hover:text-slate-500 transition ease-linear cursor-pointer ${
          filter === "ShowAll" ? "text-slate-700" : ""
        }`}
        onClick={() => updateFilter("ShowAll")}
      >
        All
      </span>
      <span
        className={`px-3 sm:px-2 hover:text-gray-700 dark:hover:text-slate-500 transition ease-linear cursor-pointer ${
          filter === "ShowActive" ? "text-slate-700" : ""
        }`}
        onClick={() => updateFilter("ShowActive")}
      >
        Active
      </span>
      <span
        className={`px-3 sm:px-2 hover:text-gray-700 dark:hover:text-slate-500 transition ease-linear cursor-pointer ${
          filter === "ShowCompleted" ? "text-slate-700" : ""
        }`}
        onClick={() => updateFilter("ShowCompleted")}
      >
        Completed
      </span>
    </div>
  );
};

export default TodoListFilters;
