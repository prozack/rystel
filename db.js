"use strict"
//const PouchDb = require ('pouchdb');
const data = module.exports;
// const db = new PouchDb('rystel');

data.dbInfo = function(db) {
  return db.info()
  .catch(function(err) {
	console.log("Error retrieving database ", err);
  })
  .then(function(res) {
	return res;
  })
};

data.putDoc = function(db, doc) {
  return db.put(doc)
  .catch(function(err) {
	console.log("Error modifying document ", err);
  })
  .then(function(res) {
	return res;
  })
};

data.getDoc = function(db, docId) {
  return db.get(docId)
  .catch(function(err) {
	console.log("Error retrieving document ", err);
  })
  .then(function(res) {
	return res;
  })
};

data.toggleTask = function(db, docId, field, id) {
	return db.get(docId)
	.then(function(doc) {
		let inverse = !(doc[field][id].completed);
		doc[field][id].completed = inverse;
		data.putDoc(db, doc);
	})
	.catch(function(err) {
		console.error("Error toggling completion ", err);
	})
};

data.addToList = function(db, docId, field, task) {
	return db.get(docId)
	.then(function(doc) {
		doc[field].push({order: (doc[field].length + 1), rb_text: task, resolved: false})
		data.putDoc(db, doc);
	})
	.catch(function(err) {
		console.error("Error adding task ", err);
	})
}

data.reorderList = function(db, docId, field) {
	return 
}

data.deleteItem = function(db, docId, field, index) {
	return db.get(docId)
	.then(function(doc) {
		if (index !== undefined) {
           doc[field].splice(index, 1);
           data.putDoc(db, doc);
		} else {
			doc[field] = "";
			data.putDoc(db, doc);
		}
	})
	.catch(function(err) {
		console.error("Error deleting item ", err);
	})
}

data.destroyDb = function(db) {
	return db.destroy()
  .catch(function(err) {
	console.log("Error deleting database ", err);
  })
  .then(function(res) {
	return res;
  })
};

let doc3 = {
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
//* Create new fields on all lists
//- Upload photo to hero
//* Toggle items as completed
//* Delete items from db. delete items from array
//* Destroy database
//- Reorder lists 


//module.exports = PouchDb;
