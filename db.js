var PouchDb = require ('pouchdb');

var db = new PouchDb('rystel');

db.info().then(function (info) {
	console.log(info);
});

var doc = {
	"_id": "001",
	"hero": "",
	"hero_image": "",
	"quote": "",
	"goals": [
      {
      	"goal_id": "",
      	"goal_tasks": [],
      	"completed": ""
      }
	],
	"roadblocks": [
	  {
        "rb_id": "",
        "rb_text": "",
        "resolved": ""
      }  
	],
	"mindful": [
      {
      	"mind_id": "",
      	"mind_text": ""
      }
	],
};

db.put(doc, function (err, response) {
	if (err) {
      console.log(err);
	} else {
	  console.log('Successfully created document')		
	}
});

db.info().then(function (info) {
	console.log(info);
});

db.get('001', function(err, doc) {
   if (err) {
      return console.log(err);
   } else {
      console.log(doc);
   }
});

// db.destroy(function (err, response) {
// 	if (err) {
//       console.log(err);
// 	} else {
// 	  console.log('Database deleted')		
// 	}
// });



module.exports = db;