/**
 * Traverses all the elements of the objects and converts any array in it to
 * an object. For example if there is an object whose level 1 children are arrays then
 * it will convert those arrays to objects.
 * @param {Object or Array} children This is the list of children as Object or Array
 */
const formatChildren = children => {
  /**
   *Converts an Array to object
   * @param {Object} obj Array or object to convert to object
   */
  function createObject(obj) {
    if (obj instanceof Array) {
      return Object.assign({}, obj);
    } else {
      return obj;
    }
  }

  if (children === null || children === undefined) return;
  children = createObject(children);
  Object.keys(children).forEach(c => {
    children[c] = createObject(children[c]);
    children[c] =
      typeof children[c] === "object" || children[c] instanceof Array
        ? formatChildren(children[c])
        : children[c];
  });
  return children;
};

const calculatePath = root => {
  let ar = [];
  while (root != null) {
    ar.push(root);
    root = root.parent;
  }
  return ar.reverse();
};
export { formatChildren, calculatePath };
