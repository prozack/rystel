import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoInput from './ToDoInput';
import DeleteDb from './DeleteDb';

const PouchDb = require('pouchdb');
const data = require('./db.js');

const testdb = new PouchDb('testdb');
const doc1 = {_id: 'rystel', goals: []};
data.putDoc(testdb, doc1);

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  addToDo = (item) => {
    data.addToList(testdb, 'rystel', 'goals', item);
  }

  deleteDb = () => {
    data.destroyDb(testdb);
    console.log("deleted")
  }

  render() {
    return (
      <div className="App">
        <ToDoInput addToDo={this.addToDo} />
        <DeleteDb deleteDb={this.deleteDb} />
      </div>
    );
  }
}

export default App;

