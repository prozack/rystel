"use strict"
process.env.NODE_ENV = 'test'
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);


const expect = chai.expect;
const PouchDb = require('./db.js');


const testdb = new PouchDb('testdb');

const doc1 = {
	"_id": "001",
	"hero": "Elon Musk",
	"hero_image": "",
	"quote": "We can build this, I think",
	"goals": [
      {
      	"goal_id": "001",
      	"goal_tasks": ["Fish more.", "Eat less"],
      	"completed": false
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

describe('Should create a database', function() {
  it('Should return info from a successful creation', function () {
      
      return new PouchDb('testdb').info()
        .catch(function(error) {
          console.error('error retreiving database', error);
        })
        .then(function(info) {
          console.log(info);
          expect(info).to.exist;
        })
    })
});

describe('Should add/retrieve documents from database', function() {
	it('Should successfully upload a document to the database', function () {

		return testdb.put(doc1)
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
		return testdb.get('001', function(err, doc) {
           if (err) {
             return console.log(err);
           } else {
             return doc;
           }
		})
		.then(function(res) {
	    expect(res).to.exist;
	    expect(res._id).to.equal('001');
	    expect(res.hero).to.equal('Elon Musk');
	    })
    })
});

describe('Should read and modify attributes from a document', function() {

	it('Should retrieve an element from a document', function() {
		return testdb.get('001')
		.then(function(doc) {
			return doc.goals[0];
		})
		.then(function(res) {
			console.log('Retrieved element: ', res);
			expect(res).to.exist;
			expect(res.goal_tasks[1]).to.equal('Eat less');

		})
	})
	
	it('Should modify an element from a document', function() {
    	return testdb.get('001')
    	.then(function(doc) {
    		return doc._rev;
    	})
    	.then(function(rev) {
    		let newdoc = {
    			_id: "001",
    			_rev: rev,
    			hero: "Mark Zuckerberg",
    			mindful: [{
    			  "mind_id": "001",
      	          "mind_text": "Remember to smell the roses"
    			}]
    		};
    		testdb.put(newdoc);
    	})
    	.catch(function(error) {
    		console.error('Error updating document: ', error);
    	})
    	.then(function() {
    		return testdb.get('001', function(err, doc) {
              if (err) {
                return console.log(err);
              } else {
                return doc;
              }
    		})
    	})
    	.then(function(res) { 
    	console.log("this is firing: ", res);
    	expect(res.hero).to.equal('Mark Zuckerberg');
        expect(res.mindful[0].mind_text).to.equal('Remember to smell the roses');
        })
    })
});

describe('Should destroy a database', function() {
	it('Should destroy an existing database', function () {
	return testdb.destroy()
	  .then(function(res) {
        return res;
	  })
	  .then(function(res) {
	  	expect(res.ok).to.equal(true);
	  })
	})
});


