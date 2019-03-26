/*
Given an array of words, find all shortest unique prefixes to represent each word in the given array. Assume that no word is prefix of another.
*/


class Trie {

  constructor(){
    this.root = new TrieNode("root")
  }

  insert(string){
    let length = string.length
    let currNode = this.root
    for (var i=0;i<length;i++){
      let childChar = string[i]
      // determine if it has
      let hasChildNode = currNode.hasChild(childChar)
      if (!hasChildNode){
        currNode.addChild(new TrieNode(childChar))
      }else{
        hasChildNode.freq++
      }
      currNode = currNode.hasChild(childChar)
      // otherwise create new child
    }
    console.log(this.root)
  }

  printPrefixes(node, existingPrefix){
    let newVal = `${existingPrefix}+${node.val}`
    // base
    if (node.freq == 1 && node.val != "root"){
      // print out the value
      console.log(newVal)
      return newVal
    }

    for (var i=0;i<node.children.length;i++){
      let childNode = node.children[i]
      this.printPrefixes(childNode, newVal)
    }

  }

}


class TrieNode {
  constructor(val){
    this.val = val
    this.children  =[]
    this.freq = 1
  }


  addChild(node){
    this.children.push(node)
    return this
  }

  hasChild(val){
    return this.children.find(element =>{
      return element.val == val
    })

  }

}

let trie = new Trie()
trie.insert("zebra")
trie.insert("dog")
trie.insert("dot")
trie.insert("dove")
trie.printPrefixes(trie.root, "")

