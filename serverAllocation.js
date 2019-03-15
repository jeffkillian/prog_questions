/*You're running a pool of servers where the servers are     
    # numbered sequentially starting from 1. Over time, any 
    # given server might explode, in which case its server    
    # number is made available for reuse. When a new 
    # server is launched, it should be given the 
    # lowest available number.
    #
    # Write a function which, given the list of currently   
    # allocated server numbers, returns the number of the next server to allocate. 

    # For example, your function should behave something like the following:
    #
    #   >> next_server_number([5, 3, 1])
    #   2
    #   >> next_server_number([5, 4, 1, 2])
    #   3
    #   >> next_server_number([3, 2, 1])
    #   4
    #   >> next_server_number([2, 3])
    #   1
    #   >> next_server_number([])
    #   1
*/


function nextServerNumber(servers){
  let sortedServers = servers.slice().sort()
  if (sortedServers[0]!=1) return 1
  for (var i=0;i<sortedServers.length;i++){
    let currValue = sortedServers[i]
    // If we are at the last one, just return the next total number
    if (i== sortedServers.length-1) return currValue + 1
    let nextVal = sortedServers[i+1]
    if (currValue+1 != nextVal) return currValue+1
  }
  return 1

}

// console.log(nextServerNumber([5,3,1]))
// console.log(nextServerNumber([5,4,1,2]))
// console.log(nextServerNumber([3,2,1]))
// console.log(nextServerNumber([2,3]))
// console.log(nextServerNumber([]))


/*    # Server names consist of an alphabetic host type 
    # (e.g. "apibox") concatenated with the server number,
    # with server numbers allocated as before (so "apibox1",   
    # "apibox2", etc. are valid hostnames).
    #
    # Write a name tracking class with two operations,  
    # allocate(host_type) and deallocate(hostname). 
    # The former should reserve and return the next 
    # available hostname, while the latter should release   
    # that hostname back into the pool.
    #
    # For example:


   # >> tracker = Tracker.new()
   # >> tracker.allocate("apibox")
   # "apibox1"
   # >> tracker.allocate("apibox")
   # "apibox2"
   # >> tracker.deallocate("apibox1")
   # nil
   # >> tracker.allocate("apibox")
   # "apibox1"
   # >> tracker.allocate("sitebox")
   # "sitebox1"

       */


class Tracker {
  constructor(){
    this.prefixes = {}
  }
  
  allocate(hostname){
    // if it doesn't exist
    if (!this.prefixes[hostname]){
      this.prefixes[hostname]=[1]
      return hostname+"1"
    }

    let nextNumber = nextServerNumber(this.prefixes[hostname])
    this.prefixes[hostname].push(nextNumber)
    
   
    return `${hostname}${nextNumber}`

  }

  deallocate(hostname){
    // comes in as a string
    // strip all numbers to get prefix
    let prefix = hostname.replace(/[0-9.]/g, "");
    let number = parseInt(hostname.replace(/\D/g,''));
    let numbers = this.prefixes[prefix]
    if (!numbers) return "there were no prefixes of "+ prefix
    let index = numbers.findIndex(element => element == number)
    if (index == -1) return "Number not in index, nothing to remove"
    numbers = numbers.splice(index,1)
    return "Removed element "+ hostname


  }




}

let tracker = new Tracker()
console.log(tracker.allocate("apibox"))
// "apibox1"
console.log(tracker.allocate("apibox"))
// "apibox2"
console.log(tracker.deallocate("apibox1"))
// nil
console.log(tracker.allocate("apibox"))
// "apibox1"
console.log(tracker.allocate("sitebox"))
// "sitebox1"
