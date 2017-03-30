"use strict"
//const PouchDb = require ('pouchdb');
const data = module.exports;
// const db = new PouchDb('rystel');

data.dbInfo = function(db) {
  return db.info();
};

data.putDoc = function(db, doc) {
  return db.put(doc);
};

data.getDoc = function(db, docId) {
  return db.get(docId)
  // .then(function(res) {
  //   return res;
  // })
  // .catch(function(err) {
  // 	console.error('Error retrieving document: ', err);
  // })
};

data.putDoc = function(db, docId, doc) {
  return db.put
}

let doc = {
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

//Methods to build out:
//* Grab current info/rev from db
//- Create new fields on all lists
//- Upload photo to hero
//- Togge items as completed
//- Delete items from db. delete items from array
//- Destroy database
//- Reorder lists 


//module.exports = PouchDb;
