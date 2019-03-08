import { BinaryTree, Node} from "./binaryTree.js"


function isAVLTree(node){
  if (node == null) return true
  // if left.maxLength is within 1 of right.maxlenght, we are avl tree
  console.log(getMaxDepth(node.left))
  console.log(getMaxDepth(node.right))
  if (Math.abs(getMaxDepth(node.left)-getMaxDepth(node.right))>1) return false
  return isAVLTree(node.left) && isAVLTree(node.right)
}

// given a node, get the maximum depth it goes
function getMaxDepth(node){
  if (node == null) return 0
  // get the max of it's subtree
  
  let maxD= Math.max(getMaxDepth(node.left),getMaxDepth(node.right))+1
 // console.log(`Max depth of ${node.value} is ${maxD}`)
  return maxD

}

let tree = new BinaryTree(7)

tree.add(4)
tree.add(10)
tree.add(11)
tree.add(5)
tree.add(6)
tree.add(3)


console.log(isAVLTree(tree.root))