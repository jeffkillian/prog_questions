import {BinaryTree, Node} from "./binaryTree.js"

/*
Write an algorithm to find the "next" node (i.e., in-order successor) of a given node in a binary search tree.
 You may assume that each node has a link to its parent.
 */

// let wasFound = 0
// // function findNextNode(currNode,targetNode){
 
// //   if (wasFound>1) return
// //   if (currNode == null) return
// //   // must do this in order
// //   findNextNode(currNode.left, targetNode)
// //   if (wasFound == 1){
// //     console.log(`We found it, it is:${currNode.value}`) // This is the next one after target node
// //     wasFound++
// //   }
// //   if (currNode.value == targetNode){
// //     // we have found the target, set a switch so the next one we see is printed
// //     wasFound++
// //   }

// //   findNextNode(currNode.right,targetNode)

// // }


function findNextNodeGivenParent(node){
  // if node has right tree, go to right tree, below
  if (node.right != null){
    node = node.right
    while (node.left){
      node = node.left
    }
    return node.value
  }
  // otherwise it is above
  if (node.parent == null) return node.value// If it is top of tree, 
  // if is left child, return parent
  if (node.parent.left == node) return node.parent.value
   // otherwise, call this on parent
  return findNextNodeGivenParent(node.parent)
 

}



 let binaryTree = new BinaryTree(20)
binaryTree.add(8)
binaryTree.add(22)
binaryTree.add(4)
let twelve = binaryTree.add(12)
binaryTree.add(10)
binaryTree.add(14)



// var ans = findNextNode(binaryTree.root, 14 )
var ans = findNextNodeGivenParent(twelve)
console.log(ans)

