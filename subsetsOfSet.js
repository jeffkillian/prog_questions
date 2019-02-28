// write a method to return all subsets of a set
let set =["a","b","c","d","e"]

function getAllSubsets(inputSet, index) {
  if (index==set.length) return inputSet
  var newChar = set[index]
  var newCharArr = inputSet.map(value => {
    return value + "" + newChar
  })
  newSet = inputSet.concat(newCharArr)
  return getAllSubsets(newSet, index+1)

}
let allSubsets = getAllSubsets([""],0)
console.log(allSubsets)