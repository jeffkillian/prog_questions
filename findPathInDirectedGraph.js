//Given a directed graph, design an algorithm to find out 
//whether there is a route between two nodes.

class Node {
  constructor(value){
    this.value = value
    this.next = []
  }
  pointTo(node){
    this.next.push(node)
  }
}


function isPath(node, target){
  if (node == target) return true
  if (node == null) return false
  for (var i=0;i<node.next.length;i++){
    if (isPath(node.next[i], target)) return true
  }
  return false
}



let node7 = new Node(7)
let node6 = new Node(6)
let node1 = new Node(1)
let node8 = new Node(8)
let node2 = new Node(2)
let node5 = new Node(5)
let node4 = new Node(4)
node1.pointTo(node4)
node6.pointTo(node5)
node2.pointTo(node8)
node7.pointTo(node6)
node7.pointTo(node8)
node6.pointTo(node1)

let startNode = node1
let endNode = node4
var ans = isPath(startNode,endNode) || isPath(startNode,endNode)
console.log(ans)




