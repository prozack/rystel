var PouchDb = require 'pouchdb';

var db = new PouchDb('rystel');

db.info().then(function (info) {
	console.log(info);
});

var doc = {
	"_id": ,
	"hero": ,
	"hero_image": ,
	"quote": ,
	"goals": [
      {
      	"goal_id": ,
      	"goal_tasks": [],
      	"completed": 
      }
	],
	"roadblocks": [
	  {
        "rb_id": ,
        "rb_text": ,
        "resolved": 
      }  
	],
	"mindful": [
      {
      	"mind_id": ,
      	"mind_text": 
      }
	],
};