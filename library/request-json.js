var request = require("request");

export default function requestJson(url, callback) {
    request(url, function(error, response) {
        if (error) {
            callback(error);
        }
        
        else {
            
            try {
                var parse = JSON.parse(response.body);
                callback(null, parse);
            }
            
            catch (error) {
                callback(error);
            }
        }

    });
}

