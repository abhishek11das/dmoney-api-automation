const newman = require('newman');
require ('dotenv').config();

newman.run({
    collection: `https://api.postman.com/collections/45682289-c5fc9bf9-6443-4302-aef4-1a576b1838fe?access_key=${process.env.pmatKey}`,
    //collection:require('./collection/dmoney-user-api-collection.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/reports.html',
        }
    }

}, function(err){
    if(err) {throw err;}
    console.log('collection run complete!');
})