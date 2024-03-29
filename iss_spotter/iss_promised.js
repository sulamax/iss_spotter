const request = require('request-promise-native');

const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json');
};

module.exports = {
  fetchMyIP
};

const fetchCoordsByIP = function(body) {
  const ip = JSON.parse(body).ip;
  return request(`https://ipvigilante.com/json/${ip}`);
};

module.exports = {
  fetchMyIP,
  fetchCoordsByIP
};

const fetchISSFlyOverTimes = function(body) {
  const {
    latitude,
    longitude
  } = JSON.parse(body).data;
  const url = `http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`;
  return request(url);
};

module.exports = {
  fetchMyIP,
  fetchCoordsByIP,
  fetchISSFlyOverTimes
};

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((data) => {
      const {
        response
      } = JSON.parse(data);
      return response;
    });
};

module.exports = {
  nextISSTimesForMyLocation
};