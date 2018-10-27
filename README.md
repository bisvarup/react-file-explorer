# Screenshots

![File Explorer](https://github.com/bisho1995/file-explorer/blob/master/Screenshots/1.png)
![File Explorer](https://github.com/bisho1995/file-explorer/blob/master/Screenshots/2.png)
![File Explorer](https://github.com/bisho1995/file-explorer/blob/master/Screenshots/3.png)
![File Explorer](https://github.com/bisho1995/file-explorer/blob/master/Screenshots/4.png)
![File Explorer](https://github.com/bisho1995/file-explorer/blob/master/Screenshots/5.png)
![File Explorer](https://github.com/bisho1995/file-explorer/blob/master/Screenshots/6.png)

# Points

1. The application uses a custom m-ary datastructure to represent the files and folders.
2. The state is managed with basically two key pieces, path and root. Root is the current root and path is the from root to current node.
3. You can view folders and files from the left sidebar, explorer and the path breadcrumb on top.

# 28/10/2018

- Refactor the code into container component architecture. **looks horrible now**
- implement the drag and drop
- create a small info window on right to display some information of the file or folder on focus.
- open folders on double click only, single folder selects them just
- Add more docs.

# 9/29/2018

# TODO

Some file and folder names are too long. Trim them while displaying but on hover show them.

# 9/28/2018

# TODO

When the app loads all the folders must be listed in the explorer

# TODO

There is a bug in the Tree.js file. The tree is not getting created properly. Possible format the representation of the tree.

# 9/22/2018

## TODO

Think of an efficient way of handling files and folders open and closed. Think of a good datastructure that can do the job. There can be multiple files in a folder. Clicking the appropriate file and folder should push or pop something.

## Solution

It has to be a tree data structure. From root to a node path. Recompute path at every click.

## Lessons

Use the container component pattern aka container does the data fetching component just shows the data. the container passes the data on to the component in the form of props and the component just shows the data.
<br><br>
Use the shouldComponentUpdate() method to check if the component needs to be updated. Need to do more research on this. Along with this use the PureRenderMixin https://reactjs.org/docs/pure-render-mixin.html
