import { BinaryTree, Node } from "./binaryTree.js"



function isBinarySearchTree(node, min, max){
  if (node == null) return true
  if (node)

}
// function isBinarySearchTree(node){
//   if (node== null) return true
//   if (maxValInTree(node.left) > node.value) return false
//   if (minValInTree(node.right) < node.value) return false
//   return isBinarySearchTree(node.left) && isBinarySearchTree(node.right)
 
// }


// function maxValInTree(node){
//   if (node == null ) return -Infinity
//   return Math.max(maxValInTree(node.left),maxValInTree(node.right),node.value)
// }

// function minValInTree(node){
//   if (node == null) return Infinity
//   return Math.min(minValInTree(node.left),minValInTree(node.right),node.value)
// }

// for each node, check if max of left side tree is less than value
// check if min of right sub tree is greater than ndoe.value

let binaryTree = new BinaryTree(6)
binaryTree.add(4).right=new Node(5)
binaryTree.add(8).left=new Node(7)
binaryTree.add(10)

binaryTree.printTreeBFS()
console.log(isBinarySearchTree(binaryTree.root, -Infinity, Infinity))

