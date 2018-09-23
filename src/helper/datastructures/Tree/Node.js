class Node {
  constructor(title) {
    this.data = title;
    this.edges = [];
  }

  getData() {
    return this.data;
  }
}

export default Node;
