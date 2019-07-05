const {
  fetchMyIP
} = require('./iss_promised');

fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then(body => console.log(body));

const {
  nextISSTimesForMyLocation
} = require('./iss_promised');

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })

.catch((error) => {
  console.log("It didn't work: ", error.message);
});

// const {
//   fetchCoordsByIP
// } = require('./iss_promised');

// fetchCoordsByIP()
//   .then(body => console.log(body));