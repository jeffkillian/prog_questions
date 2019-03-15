//Write a map implementation with a get function that lets  you retrieve 
//the value of a key at a particular time. 
//t:0 A =1 t:2 A = 2 get(A, t:1) -> 1 get(A, t:3) -> 2


class Map {
  constructor(){
    this.values = {}
  }

  add(key, value, time){
    let newVal = {value: value, time: time}
    if (!this.values[key]){
      this.values[key] = [newVal]
      return
    }
    this.values[key].push(newVal)
  }

  get(key,time){
    // gets the key at a given time
    // if it doesn't exist
    if (!this.values[key]) return null

    // if it does
    // iterate backwards until time is less than now.. then return that value
    for (var i=this.values[key].length-1; i>=0; i--){
      let obj = this.values[key][i]
      if (obj.time >= time) continue
      return obj.value
    }
  }
}

let j = new Map()

j.add("a",1,0)
j.add("a",2,2)
console.log(j.get("a",1))
//1
console.log(j.get("a",3))
// 2