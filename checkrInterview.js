
//  Name Matching

//  At Checkr, one of the most important aspects of our work is accurately matching records
//  to candidates. One of the ways that we do this is by comparing the name on a given record
//  to a list of known aliases for the candidate. In this exercise, we will implement a
//  `name_match` method that accepts the list of known aliases as well as the name returned
//  on a record. It should return True if the name matches any of the aliases and False otherwise.

//  The name_match method will be required to pass the following tests:

//  1. Exact match

//  let known_aliases = ['Alphonse Gabriel Capone', 'Al Capone']
//  name_match(known_aliases, 'Alphonse Gabriel Capone')// => True
//  name_match(known_aliases, 'Al Capone')// => True
//  name_match(known_aliases, 'Alphonse Francis Capone')// => False


//  2. Middle name missing (on alias)

//  let known_aliases = ['Alphonse Capone']
//  name_match(known_aliases, 'Alphonse Gabriel Capone') //=> True
//  name_match(known_aliases, 'Alphonse Francis Capone')// => True
//  name_match(known_aliases, 'Alexander Capone')// => False


//  3. Middle name missing (on record name)

//  let known_aliases = ['Alphonse Gabriel Capone']
//  name_match(known_aliases, 'Alphonse Capone') //=> True
//  name_match(known_aliases, 'Alphonse Francis Capone') //=> False
//  name_match(known_aliases, 'Alexander Capone') //=> False


//  4. More middle name tests
//  These serve as a sanity check of your implementation of cases 2 and 3

//  let known_aliases = ['Alphonse Gabriel Capone', 'Alphonse Francis Capone']
//  name_match(known_aliases, 'Alphonse Gabriel Capone') //=> True
//  name_match(known_aliases, 'Alphonse Francis Capone') //=> True
//  name_match(known_aliases, 'Alphonse Edward Capone') //=> False


//  5. Middle initial matches middle name

//  let known_aliases = ['Alphonse Gabriel Capone', 'Alphonse F Capone']
//  name_match(known_aliases, 'Alphonse G Capone') //=> True
//  name_match(known_aliases, 'Alphonse Francis Capone') //=> True
//  name_match(known_aliases, 'Alphonse E Capone') //=> False
//  name_match(known_aliases, 'Alphonse Edward Capone') //=> False
//  name_match(known_aliases, 'Alphonse Gregory Capone') //=> False


//  Bonus: Transposition

//  Transposition (swapping) of the first name and middle name is relatively common.
//  In order to accurately match the name returned from a record we should take this
//  into account.

//  All of the test cases implemented previously also apply to the transposed name.


//  6. First name and middle name can be transposed

//  'Gabriel Alphonse Capone' is a valid transposition of 'Alphonse Gabriel Capone'

//  let known_aliases = ['Alphonse Gabriel Capone']
//  name_match(known_aliases, 'Gabriel Alphonse Capone') //=> True
//  name_match(known_aliases, 'Gabriel A Capone') //=> True
//  name_match(known_aliases, 'Gabriel Capone') //=> True
//  name_match(known_aliases, 'Gabriel Francis Capone') //=> False


//  7. Last name cannot be transposed

//  'Alphonse Capone Gabriel' is NOT a valid transposition of 'Alphonse Gabriel Capone'
//  'Capone Alphonse Gabriel' is NOT a valid transposition of 'Alphonse Gabriel Capone'

 let known_aliases = ['Alphonse Gabriel Capone']
 name_match(known_aliases, 'Alphonse Capone Gabriel') //=> False
 name_match(known_aliases, 'Capone Alphonse Gabriel') //=> False
 name_match(known_aliases, 'Capone Gabriel') //=> False  


function name_match(aliases, name) {
  // aliases should have normal and transposed names
  let transposedAliases = aliases.map(transposeName)
  let newAliases = [...aliases,...transposedAliases]
  return console.log(doesNameMatch(newAliases,name) || doesNameMatch(newAliases,transposeName(name)))
  
}

function doesNameMatch(aliases,name){
  if(aliases.includes(name)) return true
  
  // if middle name gone on alias
  if(aliases.includes(removeMiddleName(name))) return true


  // Middle name missing on record 
  let aliasesWOMiddle = aliases.map(alias => {return removeMiddleName(alias)})
  if (aliasesWOMiddle.includes(name)) return true

  // Middle initial matches middle name
  // build aliases with middle initials, check against name
  let aliasesWMidInitial = aliases.map(alias => {
    return nameWithMiddleInitial(alias)
  })
  if (aliasesWMidInitial.includes(name)) return true

    // build name with middle initial, check against aliasse
  if (aliases.includes(nameWithMiddleInitial(name))) return true
  return false
}

function removeMiddleName(name){
  let splitName = name.split(" ")
  return splitName[0] + " "+(splitName.length == 3 ? splitName[2]: splitName[1])
}

function nameWithMiddleInitial(name){
  let splitName = name.split(" ")
  if (splitName.length == 2) return splitName // no middle initial
  splitName[1] = splitName[1][0]
  return splitName.join(" ")
}

function transposeName(name){
  let nameArr = name.split(" ")  
  if (nameArr.length ==2 ) return name
  return `${nameArr[1]} ${nameArr[0]} ${nameArr[2]}` 
}