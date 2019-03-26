
 
 /*

Step 1: min_by_key Throughout this interview, we'll pretend we're building a new analytical database. 
Don't worry about actually building a database though – these will all be toy problems. Here's how the database works:
 all records are represented as maps, with string keys and integer values. The records are contained in an array, in no particular order.
 To begin with, the database will support just one function: min_by_key. This function scans the array of records and returns the record
 that has the minimum value for a specified key. Records that do not contain the specified key are considered to have value 0 for the key. 
 Note that keys may map to negative values! Here's an example use case: each of your records contains data about a school student. 
 You can use min_by_key to answer questions such as "who is the youngest student?" and "who is the student with the lowest grade-point average?" 
 Implementation notes: You should handle an empty array of records in an idiomatic way in your language of choice. 
 If several records share the same minimum value for the chosen key, you may return any of them.

In [2]:
def test_min_by_key():
*/
//     let example1 = [{"a": 1, "b": 2}, {"a": 2}]
//     let example2 = [example1[1], example1[0]]
//     let example3 = [{}]
//     let example4 = [{"a": -1}, {"b": -1}]
    
// console.log(minByKey("a", example1) == example1[0])
// console.log(minByKey("a", example2) == example2[1])
// console.log(minByKey("b", example1) == example1[1])
// console.log(minByKey("a", example3) == example3[0])
// console.log(minByKey("b", example4) == example4[1])

function minByKey(key,array){
  return firstByKey(key,"asc",array)
}



/*
Step 2: first_by_key Our next step in database development is to add a new function. We'll call 
this function first_by_key. It has much in common with min_by_key. first_by_key takes three arguments:
 a string key a string sort direction (which must be either "asc" or "desc") an array of records, 
 just as in min_by_key. If the sort direction is "asc", then we should return the minimum record, otherwise we should 
 return the maximum record. As before, records without a value for the key should be treated as having value 0. 
 Once you have a working solution, you should re-implement min_by_key in terms of first_by_key .

 */


 function firstByKey(key,dir, array){
   let newArray = array.slice()
  // returns the first element when sorting by a key
  let comparator = new Comparator(key, dir)
  let vals = newArray.sort(comparator.compare)


  return vals[0]

 }

//Step 3: first_by_key comparator As we build increasingly rich orderings for our records,
// we'll find it useful to extract the comparison of records into a comparator. This is a function or object 
//(depending on your language) which determines if a record is "less than", equal, or "greater than" another.
// In object-oriented languages, you should write a class whose constructor accepts two parameters: a string key and a string direction. 
//The class should implement a method compare that takes as its parameters two records. \
//This method should return -1 if the first record comes before the second record (according to key and direction), 
//zero if neither record comes before the other, or 1 if the first record comes after the second. In functional languages, 
//you should write a function which accepts two parameters: a string key and a string direction. 
//The function should return a method that takes as its parameters two records. This function should return -1 if 
//the first record comes before the second record (according to key and direction), zero if neither record comes before the other, 
//or 1 if the first record comes after the second. You should then use your comparator in your implementation of first_by_key.


class Comparator {
  constructor(key,dir){
    this.key = key
    this.dir = dir

  }

  compare= (a,b) => {
    let ans
    let aVal = a.hasOwnProperty(this.key) ? a[this.key] : 0
    let bVal = b.hasOwnProperty(this.key) ? b[this.key] : 0
    if (aVal<bVal) ans = -1
    if (aVal==bVal) ans = 0
    if (aVal>bVal) ans = 1
    return this.dir == "asc" ? ans : -ans
    
    
  }
}


// let cmp = new Comparator("a","asc")
// console.log(cmp.compare({"a": 1}, {"a": 2}) == -1)
// console.log(cmp.compare({"a": 2}, {"a": 1}) == 1)
// console.log(cmp.compare({"a": 1}, {"a": 1}) == 0)
let example1 = [{"a": 1}]
let example2 = [{"b": 1}, {"b": -2}, {"a": 10}]
let example3 = [{}, {"a": 10, "b": -10}, {}, {"a": 3, "c": 3}]

console.log(firstByKey("a", "asc", example1) == example1[0])
console.log(firstByKey("a", "asc", example2) == example2[0])
console.log(firstByKey("a", "desc", example2) == example2[2])
console.log(firstByKey("b", "asc", example2) == example2[1])
console.log(firstByKey("b", "desc", example2) == example2[0])
console.log(firstByKey("a", "desc", example3) == example3[1])
