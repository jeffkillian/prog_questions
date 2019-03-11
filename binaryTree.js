import Queue from "./queue.js"

export class BinaryTree {
  constructor(rootValue){
    this.root = new Node(rootValue)
    this.parent = null
  }

  //add
  add(value) {
    const newNode = new Node(value)
    this.climbDownTree(this.root,newNode)
    return newNode
  }

  climbDownTree(existingNode, newNode){
    if (existingNode.value>newNode.value){
      if (!existingNode.left) {
        newNode.parent = existingNode
        return existingNode.left = newNode
      }
      this.climbDownTree(existingNode.left,newNode)
    }else{
      if (!existingNode.right) {
        newNode.parent = existingNode
        return existingNode.right = newNode
      }
      this.climbDownTree(existingNode.right,newNode)
    }
  }

  printDFS(){
    this.printDFSNode(this.root)
  }

  printDFSNode(node){
    if (node == null ) return
    this.printDFSNode(node.left)
    console.log(node.value)
    this.printDFSNode(node.right)
  }

  printBFS(){
    const queue = new Queue()
    queue.add(this.root)
    let i=1
    while (queue.size() != 0 ){
      let currNode = queue.first()
      if (currNode.left) queue.add(currNode.left)
      if (currNode.right) queue.add(currNode.right)
      console.log(currNode.value)
      queue.remove()
      i++
    }


  } 
}


export class Node {
  constructor(value){
    this.value = value
    this.left = null
    this.right = null
  }
}

// let binaryTree = new BinaryTree(7)
// binaryTree.add(4)
// binaryTree.add(11)
// binaryTree.add(13)
// binaryTree.add(40)
// binaryTree.add(20)
// binaryTree.add(21)
// binaryTree.add(18)
// binaryTree.add(19)



// binaryTree.printTreeBFS()
export default {Node, BinaryTree}