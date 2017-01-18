var request = require("request");

function requestJson(url, callback){
	request(url, function(err, result){
		if (err) {
			callback(err);
		}
		else {
				try {
					callback(null, JSON.parse(result.body));
				}
				catch (err) {
					callback(err);
				}
		}

	});

}

module.exports = requestJson();
