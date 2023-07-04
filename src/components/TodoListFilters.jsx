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
    <div className="text-sm sm:text-base font-bold text-center p-4 rounded-md bg-white dark:bg-gray-800 mt-8">
      <span
        className={`px-3 sm:px-2 hover:text-gray-700 dark:hover:text-slate-300 transition ease-linear cursor-pointer ${
          filter === "ShowAll" ? "text-sky-700" : " text-sky-700 dark:text-slate-500"
        }`}
        onClick={() => updateFilter("ShowAll")}
      >
        All
      </span>
      <span
        className={`px-3 sm:px-2 hover:text-gray-700 dark:hover:text-slate-300 transition ease-linear cursor-pointer ${
          filter === "ShowActive" ? "text-sky-700" : " text-sky-700 dark:text-slate-500"
        }`}
        onClick={() => updateFilter("ShowActive")}
      >
        Active
      </span>
      <span
        className={`px-3 sm:px-2 hover:text-gray-700 dark:hover:text-slate-300 transition ease-linear cursor-pointer ${
          filter === "ShowCompleted" ? "text-sky-700" : " text-sky-700 dark:text-slate-500"
        }`}
        onClick={() => updateFilter("ShowCompleted")}
      >
        Completed
      </span>
    </div>
  );
};

export default TodoListFilters;
