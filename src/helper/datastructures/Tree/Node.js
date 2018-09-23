class Node {
  constructor(title) {
    this.data = title;
    this.left = null;
    this.right = null;
  }

  getLeft() {
    return this.left;
  }

  getRight() {
    return this.right;
  }

  getData() {
    return this.data;
  }
}

export default Node;
