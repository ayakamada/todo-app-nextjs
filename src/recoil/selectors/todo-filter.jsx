import { selector } from "recoil";

import todoState from "@/recoil/atoms/todo";
import todoFilterState from "@/recoil/atoms/todo-filter";

const filteredTodoState = selector({
  key: "filteredTodoState",
  get: ({ get }) => {
    const filter = get(todoFilterState);
    const list = get(todoState);

    switch (filter) {
      case "ShowAll":
        return list;
      case "ShowActive":
        return list.filter((item) => !item.isDone);
      case "ShowCompleted":
        return list.filter((item) => item.isDone);
      default:
        return list;
    }
  },
});

export default filteredTodoState;
