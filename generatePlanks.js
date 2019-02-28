

function generatePlanks(inputSets, maxLength){
  if (!inputSets.length) inputSets = [["l"],["s"]]
  if (inputSets[0].length == maxLength) return inputSets
  let oldSetsWithLonger = inputSets.map(set => {
    return set.slice()
  })
  
  oldSetsWithLonger.forEach(set => {
    set = set.push("l")
  })
  let oldSetsWithShorter = inputSets.map(set => {
    return set.slice()
  })
  oldSetsWithShorter.forEach(set => {
    set = set.push("s")
  })

  let allSets = oldSetsWithShorter.concat(oldSetsWithLonger)
  return generatePlanks(allSets,maxLength)
  
}

var ans = generatePlanks([],5)
console.log(ans)