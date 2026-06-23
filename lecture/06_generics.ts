interface Backpack<Type> {
  items: Type[];
  add: (obj: Type) => void;
  get: () => Type;
}

const backpack: Backpack<string> = {
  items: ["1", "2"],
  add: (myStr) => {
    myStr.slice(0, 1);
  },
  get: () => {
    return "Hi";
  },
};
