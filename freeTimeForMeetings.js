/*
iven a list of schedules, provide a list of times that are  available for a meeting 

Example input: [ [[4,5],[6,10],[12,14]], [[4,5],[5,9],[13,16]], [[11,14]] ] 

Example Output: [ 0, 4 ], [10, 11], [16, 24 ].

*/

function freeTimeForMeetings(busyTimes){
  // loop through each item
  // for each of those, set the hour to true
  let busyHours = new Array(24)

  for (var scheduleIdx in busyTimes){
    let schedule = busyTimes[scheduleIdx]
    // loop over times and fill in values
      for ( var meetingIdx in schedule){
        let meetingTime = schedule[meetingIdx]
          // loop through meeting hours, setting it to busy
          for (var hour = meetingTime[0];hour<meetingTime[1];hour++){
            busyHours[hour] = true
          }
      }
  }
  for (var j=0;j<busyHours.length;j++){
    if (!busyHours[j]) console.log("Free at "+j)
  }
  return busyHours  
}

console.log(freeTimeForMeetings([ [[4,5],[6,10],[12,14]], 
  [[4,5],[5,9],[13,16]], 
  [[11,14]] ] ))