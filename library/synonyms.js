var request = require('request');

function SynonymAPI(apiKey) {
    this.apiKey = apiKey;
}

SynonymAPI.prototype.getSynonyms = function(word, callback) {
    var wordURL = "http://words.bighugelabs.com/api/2/"+ this.apiKey +"/" + word + "/json";
    
    request(wordURL, function(error, result) {
        if (error) {
            callback(error);
        }
        else {
            try {
                var synonyms = JSON.parse(result.body);
                callback(null, synonyms);
            }
            catch (error) {
                callback(error);
            }
        }
    });
};

//==========EXPORTING===========================
module.exports = SynonymAPI;