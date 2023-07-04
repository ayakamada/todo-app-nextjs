import { atom } from "recoil";

const todoFilterState = atom({
  key: "todoFilterState",
  default: "All",
});

export default todoFilterState;
