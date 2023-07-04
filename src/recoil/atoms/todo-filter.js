import { atom } from "recoil";

const todoFilterState = atom({
  key: "todoFilterState",
  default: "ShowAll",
});

export default todoFilterState;
