import { atom } from "recoil";

import InitialTodo from "@/data/InitialTodoList.json";


const todoState = atom({
  key: "todoState",
  default: InitialTodo,
});

export default todoState;
