const X = "X"
const O = "O"

const winnervert = [
  [X,O,X],
  [X, ,X],
  [X, ,O]
]
const winnerhori = [
  [X,O,X],
  [X,X,X],
  [O, ,O]
]

const loser = [
  [,,],
  [,,],
  [,,]
]

const winnerbackdiag = [
  [X,O,O],
  [X,O,X],
  [O, ,O]
]


const winnerdiag = [
  [O,X,O],
  [X,O,X],
  [O, ,O]
]

function generateRandomArray(){
  const returnArr = []
  for (var i=0;i<3; i++){
    const fillArr = []
    for (var j=0;j<3;j++){
      fillArr.push(Math.random()>.5 ? "X" : "O")
    }
    returnArr.push(fillArr)
  }
  return returnArr
}

function printArr(array) {
  for (var i=0;i<3;i++){
    const row = array[i]
    let stringToPrint = ""
    for (var j=0;j<3;j++){
      const char = row[j] || ""
      stringToPrint += char
      if (j==2) continue
      stringToPrint += " | "
    }
    console.log(stringToPrint)
    if (i ==2) continue
    console.log("--------")
  }
}

function isWinner(array) {
  printArr(array)
  // Is vertical winner
  for (var i=0;i<3;i++){
    const char = array[0][i]
    if (!char) continue // If it's blank
    if (char==array[1][i] && char ==array[2][i]){
      console.log(`${char} won vertically in column ${i+1}`)
    }
  }
  // check horizontally
  for (var i=0;i<3;i++){
    const char = array[i][0]
    if (!char) continue // If it's blank
    if (char==array[i][1] && char ==array[i][2]){
      console.log(`${char} won horizontally in column ${i+1}`)
    }
  }

  // diagonal
  const char = array[1][1]
  if (char==array[0][0] && char ==array[2][2]) console.log(`${char} won diagonally forwards`)
  if (char==array[0][2] && char ==array[2][0]) console.log(`${char} won diagonally backwards`)


}


isWinner(generateRandomArray())

