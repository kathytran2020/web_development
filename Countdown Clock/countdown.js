var targetDate = new Date("July 15, 2021")

function countDown() {
  var today = new Date()
  time_diff = targetDate - today
  time_diff = time_diff / 1000 >> 0 // in seconds

  days = time_diff / (3600 * 24) >> 0 // in days
  hours =  ((time_diff / (3600 * 24)) - days) * 24 >> 0 // hours

  minutes =  ((((time_diff / (3600 * 24)) - days) * 24) - hours) * 60 >> 0 //
  seconds =  Math.round((((((time_diff / (3600 * 24)) - days) * 24) - hours) * 60 - minutes) * 60) // hours

  document.getElementById("numDays").innerHTML = days;
  document.getElementById("numHours").innerHTML = hours;
  document.getElementById("numMinutes").innerHTML = minutes;
  document.getElementById("numSeconds").innerHTML = seconds;
}

countDown()
setInterval(countDown, 1000)