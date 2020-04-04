# Day Five

### Tree Traversal
Process of visiting each node in the tree exactly once in some order.

### Breadth First Traversal
- Start with the rood node
- Then move onto the root's children.
- Then move onto those node's children.

Breadth first traversal will always visit the nodes closeset to the root node before moving on to the nodes that are farther away.

### Depth First Traversal

Visits each node on an entire path, all the way to the leaf node, before visitin nodes on the next path.

Traverse tree:
1. Visit the root node of the tree.
2. Get the first unvisited child sub-tree of the current node.
3. Do step 1 with the sub-tree.

Pseudo code:
  traverse tree:
    visit the roo node of the tree.
    let subTree = the first unvisited child sub-tree of the root node.

    Recursive Case:
      If there's a subTree, traverse subTree.
    Base Case:
      If there's no subTree, do nothing.

```
Class Node {
  constructor(data) {
    this.data = data;
    this.parent = null;
    this. children = [];
  }

  depthFirstTraversal() {

    console.log(this); // 1

    for (const childNode of this.children) {
      childNode.depthFirstTraversal(); // 2
    }
  }
}
```

1. Visit the current node. In this case, we're just printing out the data.
2. Loop through every child of the current node and repeat the first step with that node.

