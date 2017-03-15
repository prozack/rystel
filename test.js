"use strict"
process.env.NODE_ENV = 'test'
const chai = require('chai');
const db = require('./db.js');
const assert = require('assert');
const expect = require('chai').expect;
const mocha = require('mocha');

const doc = {
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

describe('Should create a database', function() {});

describe('Should destroy a database', function() {});

describe('Should add a document to database', function() {});

describe('Should delete a document from database', function() {});

describe('Should retrieve a document from database', function() {});

describe('Should retrieve an attrubute from a document', function() {});


