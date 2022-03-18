class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  add(data) {
    const childNode = new Node(data);

    if (!this.left) this.left = childNode;
    else if (!this.right) this.right = childNode;
    else throw new Error("This node already has two children");
  }

  removeLeft() {
    this.left = null;
  }

  removeRight() {
    this.right = null;
  }

  children() {
    return [this.left, this.right].filter((child) => child !== null);
  }
}

class BinTree {
  constructor(data) {
    if (!data) this.root = null;
    else this.root = new Node(data);
  }

  addToTree(value, node = this.root) {
    if (this.isEmpty()) {
      this.root = new Node(value);
      return;
    }

    // Left of Tree
    if (value < node.data) {
      if (node.left === null) node.left = new Node(value);
      else this.addToTree(value, node.left);

      // Right of tree
    } else {
      if (node.right === null) node.right = new Node(value);
      else this.addToTree(value, node.right);
    }
  }

  // ************************* Depth first algoriths **************************
  // (a) Inorder (Left, Root, Right)
  inOrder(node = this.root) {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.data);
      this.inOrder(node.right);
    }
  }

  // (b) Preorder (Root, Left, Right)
  preOrder(node = this.root) {
    if (node !== null) {
      console.log(node.data);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  // (c) Postorder (Left, Right, Root)
  postOrder(node = this.root) {
    if (node !== null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.data);
    }
  }

  // Pre order
  dfs() {
    let node = this.root;
    const stack = [node];

    while (stack.length) {
      node = stack.pop();
      console.log(node.data);

      stack.push(...node.children().reverse());
    }
  }

  // ************************* Breadth first **************************
  bfs() {
    let node = this.root;
    const queue = [node];

    while (queue.length) {
      node = queue.shift();
      console.log(node.data);

      queue.push(...node.children());
    }
  }

  // ************************* Utility **************************
  findMinNode(node = this.root) {
    if (node.left == null) return node;

    return this.findMinNode(node.left);
  }

  search(value, node = this.root) {
    if (node === null) return;

    if (value === node.data) return node;
    else if (value < node.data) return this.search(value, node.left);
    else if (value > node.data) return this.search(value, node.right);
  }

  isEmpty() {
    return this.root === null;
  }
}

const t = new BinTree();
t.addToTree(5);
t.addToTree(3);
t.addToTree(6);
t.addToTree(1);
t.addToTree(4);
t.addToTree(7);

// console.log(t);
// console.log(t.print());
console.log("preorder");
t.preOrder();
console.log("--------------------------------");
console.log("postOrder");
t.postOrder();
console.log("--------------------------------");
console.log("inOrder");
t.inOrder();
console.log("--------------------------------");
console.log("Breadthfirst - queue");
console.log(t.bfs());
console.log("--------------------------------");
console.log("dfs - stack");
console.log(t.dfs());
