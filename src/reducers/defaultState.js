import folders from "../constants/data.json";
import Tree from "../helper/datastructures/Tree/Tree";
import { RootNode } from "../helper/datastructures/Tree/Node";

const root = new RootNode("/");
folders.forEach(folder => {
  const child = new Tree(folder, root).getRoot();
  root.addChild(child);
});

folders.forEach(e => {});
const initialState = {
  path: [root],
  root: root
};

export { initialState, root };
