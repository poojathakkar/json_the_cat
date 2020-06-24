const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?name=${breedName}`, (error, response, body) => {
    //console.log(error, response && response.statusCode, body);

    if (error) {
      callback(error);
    } else {
      let desc = JSON.parse(body);
      console.log(desc[0].description);
      callback(null, desc[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };