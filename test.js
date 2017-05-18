"use strict"
process.env.NODE_ENV = 'test'
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);


const expect = chai.expect;
const PouchDb = require('pouchdb');
const data = require('./src/db.js');


const testdb = new PouchDb('testdb');

const doc1 = {
	"_id": "001",
	"hero": "Elon Musk",
	"hero_image": "",
	"quote": "We can build this, I think",
	"goals": [
      {
      	"title": "New Years Resolution",
      	"tasks": ["Fish more.", "Eat less"],
      	"resolved": false, 
      	"order": 1
      }
	],
	"roadblocks": [
	  {
        "title": "Crippling existential dread",
        "text": "",
        "resolved": "",
        "order": 1
      }  
	],
	"mindful": [
      {
      	"text": "Don't smell the roses.",
      	"order": 1
      }
	],
};

describe('Should create a database', function() {
  it('Should return info from a successful creation', function () {
      
    return data.dbInfo(testdb)
      .catch(function(error) {
        console.error('Error grabbing info: ', error);
      })
      .then(function(res) {
        expect(res).to.exist;
      })
    })
});

describe('Should add/retrieve documents from database', function() {
	it('Should successfully upload a document to the database', function () {

		return data.putDoc(testdb, doc1)
          .then(function(res) {
          	 return res;
          })
          .then(function(res) { 
            expect(res.ok).to.equal(true);
            expect(res.id).to.equal('001');
            expect(res.rev).to.exist;
          })
          .catch(function(err) {
            console.error('error uploading document', err);
          })
    })

    it('Should retrieve a document from database', function() {
		return data.getDoc(testdb, '001') 
		.then(function(res) {
	      expect(res).to.exist;
	      expect(res._id).to.equal('001');
	      expect(res.hero).to.equal('Elon Musk');
	    })
    })
});

describe('Should read and modify attributes from a document', function() {

	it('Should retrieve an element from a document', function() {
		return data.getDoc(testdb, '001')
		.then(function(doc) {
		  return doc.goals[0];
		})
		.then(function(res) {
			expect(res).to.exist;
			expect(res.tasks[1]).to.equal('Eat less');
		})
	})

	it('Should modify an element from a document', function() {
    	return data.getDoc(testdb, '001')
    	.then(function(doc) {
    		doc.hero = 'Mark Zuckerberg';
    		data.putDoc(testdb, doc);
    	})
    	.catch(function(error) {
    		console.error('Error updating document: ', error);
    	})
    	.then(function() {
    		return data.getDoc(testdb, '001')
    	})
    	.then(function(res) { 
    	  expect(res.quote).to.equal('We can build this, I think')
    	  expect(res.hero).to.equal('Mark Zuckerberg');
        })
    })

    it('Should toggle task completion in a document', function() {
    	return data.toggleTask(testdb, '001', 'goals', 0)
        .then(function() {
    	  return data.getDoc(testdb, '001')
        })
    	.catch(function(err) {
    		console.error('Error updating task ', err)
    	})
    	.then(function(res) {
          expect(res.goals[0].resolved).to.equal(true);
        })
    })

    it('Should append new tasks onto any list', function() {
    	return data.addToList(testdb, '001', 'roadblocks', 'My sore toe.')
    	.then(function() {
          return data.getDoc(testdb, '001');
    	})
    	.catch(function(err) {
    	  console.error('Error updating list', err);
    	})
    	.then(function(res) {
    	  console.log('Darkwing Duck ', res);
    	  expect(res.roadblocks[1].text).to.equal('My sore toe.');
    	  expect(res.roadblocks[1].resolved).to.equal(false);
    	})
    })

    it('Should reorder items in a list', function() {
    	return data.reorderList(testdb, '001', 'roadblocks', 1, 0)
    	.then(function() {
    	  return data.getDoc(testdb, '001');
    	})
    	.catch(function(err) {
    	  console.error('Error updating list', err);
    	})
    	.then(function(res) {
    	  console.log('Firestar: ', res);
    	  expect(res.roadblocks[0].order).to.equal(2);
    	  expect(res.roadblocks[1].order).to.equal(1);
    	})
    })

    it('Should remove items from the database', function() {
    	return data.deleteItem(testdb, '001', 'hero')
        .catch(function(err) {
          console.error('Error upating lists ', err);
        })
        .then(function() {
          return data.deleteItem(testdb, '001', 'roadblocks', 0)
        })
        .then(function() {
          return data.getDoc(testdb, '001');
        })
        .then(function(res) {
          console.log('Electra Girl ', res);
          expect(res.hero).to.equal('');
          expect(res.roadblocks[0].text).to.equal('My sore toe.');
        })
    })
});

describe('Should destroy a database', function() {
	it('Should destroy an existing database', function () {
	return data.destroyDb(testdb)
	  .then(function(res) {
        return res;
	  })
	  .then(function(res) {
	  	expect(res.ok).to.equal(true);
	  })
	})
});


