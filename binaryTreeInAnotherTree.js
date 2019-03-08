import { Node, BinaryTree } from "./binaryTree.js"

//Given two binary trees, check if the first tree is subtree of the second one.

// takes in two nodes, finds subtree
function isSubTree(first, second){
  if (first == null || second == null) return false
  // We have a match root node, let's go
  if (first.value == second.value) return areIdentical(first,second)
  return isSubTree(first.left, second) || isSubTree(first.right, second)

}

// Given two trees, find if they are identical
function areIdentical(one,two){
  if (one == null && two == null) return true
  if (one.value != two.value) return false
  return areIdentical(one.left, two.left) && areIdentical(one.right, two.right)
}




let bigTree = new BinaryTree(26)
bigTree.root.left = new Node(10)
bigTree.root.left.left = new Node(4)
bigTree.root.left.left.right = new Node(30)
bigTree.root.left.right = new Node(6)

// Tree 1
//       26
//      /   \
//     10     3
//   /    \     \
//  4      6      3
//   \
//   30


// Tree 2
//     10  
//   /    \ 
//  4       6
//   \
//   30

let smallTree = new BinaryTree(10)
smallTree.add(4)
smallTree.root.left.right = new Node(30)
smallTree.root.right = new Node(6)

 var ans = isSubTree(bigTree.root,smallTree.root)
 console.log(ans)
