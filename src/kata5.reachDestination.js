const reachDestination = (distance, speed) => {
 const timeEstimate = distance / speed
 const timeRounded =  Math.round(timeEstimate * 2) /2
 
 return timeRounded.toString()

}


module.exports = reachDestination;
