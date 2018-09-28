import { RootNode, LeafNode } from "./Node";

class Tree {
  constructor(tree) {
    this.root = new RootNode(tree.title);
    const gameObj = tree["Game play resources"];
    const installation = gameObj["Installation"];
    const dependency = gameObj["Resource Dependency"];

    const installationObj = new RootNode("installation", this.root);
    this.root.addChild(installationObj);

    const dependencyObj = new RootNode("dependency", this.root);
    this.root.addChild(dependencyObj);

    installation.forEach(element => {
      const name = element["file_name"];
      const type = element["type"];

      const child = new LeafNode(name, type, installationObj);
      installationObj.addChild(child);
    });

    dependency.forEach(element => {
      const name = element["file_name"];
      const type = element["type"];

      const child = new LeafNode(name, type, dependencyObj);
      dependencyObj.addChild(child);
    });
  }
  getRoot() {
    return this.root;
  }
}

export default Tree;
