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
		let inverse = !(doc[field][id].resolved);
		doc[field][id].resolved = inverse;
		data.putDoc(db, doc);
	})
	.catch(function(err) {
		console.error("Error toggling completion ", err);
	})
};

data.addToList = function(db, docId, field, task) {
	return db.get(docId)
	.then(function(doc) {
		doc[field].push({order: (doc[field].length + 1), text: task, resolved: false})
		data.putDoc(db, doc);
	})
	.catch(function(err) {
		console.error("Error adding task ", err);
	})
}

data.reorderList = function(db, docId, field, item1, item2) {
	return db.get(docId)
	.then(function(doc) {
        let tempOrder = doc[field][item1].order;
        doc[field][item1].order = doc[field][item2].order;
        doc[field][item2].order = tempOrder;
        data.putDoc(db, doc);
	})
	.catch(function(err) {
		console.error("Error reordering list");
	})
}

// data.uploadImage = function(db, docId, file) {
// 	return db.get(docId)
// 	.then(function(doc) {
// 		let attachment = {file, }
// 		db.putAttachment(docId, file, doc._rev, )
// 	})
// }

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


//Methods to build out:
//* Grab current info/rev from db
//* Create new fields on all lists
//- Upload photo to hero
//* Toggle items as completed
//* Delete items from db. delete items from array
//* Destroy database
//* Reorder lists 
//- Add items to sublist?
//- Filter lists

