//Sherlock considers a string to be valid if all 
//characters of the string appear the same number of times. 
//It is also valid if he can remove just  character at 
// index in the string, and the remaining characters will occur the same 
//number of times. Given a string , determine if it is valid. 
//If so, return YES, otherwise return NO.


// Complete the isValid function below.
function isValid(s) {
  const charCounts = new Map()
  for (let index in s) {

      let char = s[index]
      if (!charCounts.get(char)) charCounts.set(char,0)
      charCounts.set(char, charCounts.get(char)+1)
  }

  // go through all counts, keeping track of unique count numbers
  let counts = Array.from(charCounts.values())
  // the count of how many counts there are
  let countCounts = new Map()
  for (var i=0;i<counts.length;i++){
    let count=  counts[i]
    if (!countCounts.get(count)) countCounts.set(count,0)
    countCounts.set(count, countCounts.get(count)+1)
  }
  // if the size of counts is bigger than 2 we are in a bad state.
  if (countCounts.size>2) return "NO"
  let countCountArr = Array.from(countCounts.values())
  if (countCountArr[0] > 1 && countCountArr[1] > 1) return "NO"

  let countCountKeyArr = Array.from(countCounts.keys())
  if (Math.abs(countCountKeyArr[0]-countCountKeyArr[1])> 1) return "NO"

  return "YES"
}

function onlyUnique(value, index, self) { 
  return self.indexOf(value) === index;
}
let string = "ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd"
let ans = isValid(string)
console.log(`${string} is valid?:${ans}`)