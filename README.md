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
