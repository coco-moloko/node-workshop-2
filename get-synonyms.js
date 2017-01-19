var synonymFunction = require("./library/synonyms.js");
var prompt = require('prompt');
var potato = "3b86a6bba91c9e5365404342250efb80"

prompt.start();

prompt.get(['word'], function (err, result) {
    if (err) {
        console.log("ya goofed", err);
    } else {
        console.log('Command-line input received:');
        console.log('  word: ' + result.word);
        var synGetter = new synonymFunction(potato);
        synGetter.getSynonyms(result.word, function(err, response){
            if(err) {
                console.error(err);
            } else {
                
                // **inserting table
                // console.log(response);
                // var table = new Table({
                // head: ['TH 1 label', 'TH 2 label']
                // , colWidths: [100, 200]
                // });
                
                // table.push(
                // ['First value', 'Second value']
                // , ['First value', 'Second value']
                // );
 
                //console.log(table.toString());
            }
        });
    }
});
