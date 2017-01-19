//my api key = http://words.bighugelabs.com/api/2/3b86a6bba91c9e5365404342250efb80/word/json
var request = require('request');

function SynonymAPI(apiKey) {
    this.apiKey = apiKey;
}

SynonymAPI.prototype.getSynonyms = function(word, callback) {
    var wordURL = "http://words.bighugelabs.com/api/2/297c3daf8068381fabaddff1384d0867/" + word + "/json";
    
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