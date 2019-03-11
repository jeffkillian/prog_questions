
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

  // let known_aliases = ['Alphonse Gabriel Capone', 'Alphonse Francis Capone']
  // name_match(known_aliases, 'Alphonse Gabriel Capone') //=> True
  // name_match(known_aliases, 'Alphonse Francis Capone') //=> True
  // name_match(known_aliases, 'Alphonse Edward Capone') //=> False


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

 let known_aliases = ['Alphonse Gabriel Capone']
 name_match(known_aliases, 'Gabriel Alphonse Capone') //=> True
 name_match(known_aliases, 'Gabriel A Capone') //=> True
 name_match(known_aliases, 'Gabriel Capone') //=> True
 name_match(known_aliases, 'Gabriel Francis Capone') //=> False


//  7. Last name cannot be transposed

//  'Alphonse Capone Gabriel' is NOT a valid transposition of 'Alphonse Gabriel Capone'
//  'Capone Alphonse Gabriel' is NOT a valid transposition of 'Alphonse Gabriel Capone'

//  let known_aliases = ['Alphonse Gabriel Capone']
 name_match(known_aliases, 'Alphonse Capone Gabriel') //=> False
 name_match(known_aliases, 'Capone Alphonse Gabriel') //=> False
 name_match(known_aliases, 'Capone Gabriel') //=> False  

function name_match(aliases,name){
  // add more aliases to aliases
  // only want to transpose those with three parts
  let transposedAliases =aliases.filter(alias => {
    return alias.split(" ").length == 3
  })  
  transposedAliases = transposedAliases.map(alias => {
    return transposeName(alias)
  })

  let aliasesToCompare = [...aliases,...transposedAliases]
  let val= isNameMatch(aliasesToCompare,name) || isNameMatch(aliasesToCompare,transposeName(name))

  console.log(val)
}

function isNameMatch(aliases, name){
  if (aliases.includes(name)) return true


  // middle name is missing on alias
  let nameWOMiddle = removeMiddleName(name)
  if (aliases.includes(nameWOMiddle)) return true

  let aliasesWOMiddle = aliases.map (alias => {
    return removeMiddleName(alias)
  })
  if (aliasesWOMiddle.includes(name)) return true


  // match names against aliases w/ middle initial
  let aliasesWMiddleInitial = aliases.map(alias => {
    return getNameWithMiddleInitial(alias)
  })
  if (aliasesWMiddleInitial.includes(name)) return true

  // match aliases against names w/ middle initial
  let nameWMiddleInitial = getNameWithMiddleInitial(name)
  if (aliases.includes(nameWMiddleInitial)) return true


  return false

}


function removeMiddleName(name){
  let nameWMiddleRemoved = name.split(' ')
  if (nameWMiddleRemoved.length == 2) return name // No middle name
  return `${nameWMiddleRemoved[0]} ${nameWMiddleRemoved[2]}`
}

function getNameWithMiddleInitial(name){
  let nameParts = name.split(" ")
  if (nameParts.length == 2) return name // it's only two
  let middleInitial = nameParts[1][0]
  return `${nameParts[0]} ${middleInitial} ${nameParts[2]}`
} 

function transposeName(name){
  let nameParts = name.split(" ")
  if (nameParts.length == 2) return name
  return `${nameParts[1]} ${nameParts[0]} ${nameParts[2]}`
}