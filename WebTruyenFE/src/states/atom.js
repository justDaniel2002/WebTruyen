import { atom } from "recoil";

export const categoriesAtom = atom({
  key: "categories", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

export const storiesAtom = atom({
  key: "stories", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});
