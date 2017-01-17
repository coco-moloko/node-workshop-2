//first question - make a callback-recieving function

function requestJson(url, callback) {
    var request = require("request");
    request(url, function(error, response, body) {
        if (error) {
            console.log ("oops, something went wrong!");
        }
        
        else {
            
        }
    }
    
}

console.log(requestJson())