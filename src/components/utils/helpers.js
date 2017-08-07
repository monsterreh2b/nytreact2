// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// Geocoder API
var authKey = "99078d6b0d7e43689d5f6f0942068cb8";

// Helper functions for making API Calls
var helper = {

    // This function serves our purpose of running the query to geolocate.
    runQuery: function(location) {

        console.log(location);

        // Figure out the geolocation
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
            authKey + "&q=" + topic;
        return axios.get(queryURL).then(function(response) {
            console.log(response);

            console.log(response.data.response.docs[0].headline.main);

            console.log(response.data.response.docs[0].pub_date);

            console.log(response.data.response.docs[0].web_url);

            return response.data.results;

        });
    },

    // This function hits our own server to retrieve the record of query results
    getHistory: function() {
        return axios.get("/api/saved");
    },

    // This function posts new searches to our database.
    postHistory: function(location) {
        return axios.post("/api/saved", { location: location });
    },
    deleteHistory: function() {
        return axios.delete("/api/saved");
    }
};

// We export the API helper
module.exports = helper;