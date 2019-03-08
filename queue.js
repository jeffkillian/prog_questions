
export default class Queue {
  constructor(){
    console.log("hello world")
    this.data = []
  }


  add(val) {
    this.data.push(val)

  }

  remove(){
    this.data.shift()
  }

  first(){
    return this.data[0]
  }

  last(){
    return this.data[this.data.length-1]
  }

  size(){
    return this.data.length
  }


}