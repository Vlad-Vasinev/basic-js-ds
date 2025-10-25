const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }
  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = { data: data, left: null, right: null };
    if (!this.rootNode) {
      this.rootNode = newNode;
      return;
    }
    let currentNode = this.rootNode;
    while (true) {
      if (data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
        continue;
      }
      if (data > currentNode.data) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
        continue;
      } else {
        return;
      }
    }
  }

  has(data) {
    let currentNode = this.rootNode;
    while (currentNode.data !== data) {
      if (data < currentNode.data) {
        if (!currentNode.left) {
          return false;
        }
        currentNode = currentNode.left;
      }
      if (data > currentNode.data) {
        if (!currentNode.right) {
          return false;
        }
        currentNode = currentNode.right;
      }
    }
    return true;
  }

  find(data) {
    let currentNode = this.rootNode;
    while (currentNode.data !== data) {
      if (data < currentNode.data) {
        if (!currentNode.left) {
          return null;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          return null;
        }
        currentNode = currentNode.right;
      }
    }
    return currentNode;
  }

  remove(data) {
    let currentNode = this.rootNode;
    let parent;
    while (currentNode.data !== data) {
      if (data < currentNode.data) {
        if (!currentNode.left) {
          return;
        }
        parent = currentNode;
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          return;
        }
        parent = currentNode;
        currentNode = currentNode.right;
      }
    }
    if (!currentNode.left && !currentNode.right) {
      if (parent.left === currentNode) {
        parent.left = null;
      } else {
        parent.right = null;
      }
      return;
    }
    if (!currentNode.left && currentNode.right) {
      if (parent.left === currentNode) {
        parent.left = currentNode.right;
      } else {
        parent.right = currentNode.right;
      }
      return;
    }
    if (currentNode.left && !currentNode.right) {
      if (parent.left === currentNode) {
        parent.left = currentNode.left;
      } else {
        parent.right = currentNode.left;
      }
      return;
    }
    if (currentNode.left && currentNode.right) {
      let rightNode = currentNode.right;
      let parentRightNode;
      while (rightNode.left) {
        parentRightNode = rightNode;
        rightNode = rightNode.left;
      }
      currentNode.data = rightNode.data;
      if (!parentRightNode) {
        currentNode.right = null;
      } else {
        if (rightNode.right) {
          parentRightNode.left = rightNode.right;
        } else {
          parentRightNode.left = null;
        }
      }
    }
  }

  min() {
    let currentNode = this.rootNode;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  max() {
    let currentNode = this.rootNode;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree,
};