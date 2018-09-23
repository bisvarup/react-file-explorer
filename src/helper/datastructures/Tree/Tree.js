import Node from "./Node";

class Tree {
  /**
   * Creates the root node with TITLE and sets up the children accordingly.
   * @param {String} data The title of the root Node.
   * @param {Object} children The object having the data for the child nodes
   */
  constructor(data, children) {
    this.root = new Node(data);
    this.allChildNodes = children;
    this.makeChildren();
  }

  /**
   * Make the child nodes of the root node
   */
  makeChildren() {
    Object.keys(this.allChildNodes).forEach(n => {
      if (typeof this.allChildNodes[n] === "object") {
        const child = new Tree(n, this.allChildNodes[n]).getTree();
        console.log("child = ", child);
        this.root.edges.concat([child]);
      }
    });
  }

  getTree() {
    return this.root;
  }
}

export default Tree;
