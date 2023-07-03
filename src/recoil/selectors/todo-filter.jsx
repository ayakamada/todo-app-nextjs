import { selector } from "recoil";

import todoState from "@/recoil/atoms/todo";
// import todoFilterState from "../atoms/todo-filter";

const filteredTodoState = selector({
  key: "filteredTodoState",
  get: ({ get }) => {
    // const filter = get(todoFilterState);
    const list = get(todoState);

    return list;

    // switch (filter) {
    //   case ShowActive:
    //     return list.filter((item) => !item.isDone);
    //   case ShowCompleted:
    //     return list.filter((item) => item.isDone);
    //   default:
    //     return list;
    // }
  },
});

export default filteredTodoState;
