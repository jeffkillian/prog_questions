//The stock span problem is a financial problem where we have a series 
//of n daily price quotes for a stock and we need to calculate the span of stock’s price for all n days. 
//The span Si of the stock’s price on a given day i
// is defined as the maximum number of consecutive days 
//just before the given day, for which the price of the stock on the
// current day is less than or equal to its price on the given day.



class Stack {

  constructor(){
    this.data= []
  }

  pop(){
    this.data.pop()
  }

  push(val){
    this.data.push(val)
  }

  peek=()=>{
    return this.data[this.data.length-1]
  }

}

function stockSpan(prices){


  let stack = new Stack() 
  let span = [1]
  stack.push(0)   // Put day 1 on to stack.
  for (var i=1;i<prices.length;i++){
    
    // If price of stock on day at top of stack is less than price of stock on current day, Pop the index from stack.
    while (stack.length && prices[stack.peek()] <= prices[i]) {
      stack.pop()
    }
    
       // If price of stock on the day on top of stack is greater than price of stock on current day, calculate span as current day – day at top of stack.

       span[i] = stack.length ==0? (i + 1) : (i - stack.peek()); 
  
       // Push this element to stack 
       stack.push(i); 
  }
  return span
}

  // Initialize span of day 1 as 1.

  // For all days starting from day 2, repeat following steps.
  // Push current day index on to stack.

function bruteForceStockSpan(prices){
  // Brute force
  // for each element, look at all of the elements until you get to a higher one, count how many 

  return prices.map((price,i) => {
    // look at all that are lower than it before
    let consecutiveDays = 1
    for (var j=i-1;j>=0;j--){
      let prevDayVal = prices[j]
        if (prevDayVal>price) break
        consecutiveDays++
    }
    return consecutiveDays
  } )

}
let input =[100, 80, 60, 70, 60, 75, 85]
   console.log(stockSpan(input))