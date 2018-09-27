class RootNode {
  constructor(title, parent = null) {
    this.type = "root";
    this.title = title;
    this.parent = parent;
    this.children = [];
  }
  addChild(child) {
    this.children.push(child);
  }
}

class LeafNode {
  constructor(name, type, parent) {
    this.name = name;
    this.type = type;
    this.parent = parent;
  }
}

export { RootNode, LeafNode };
