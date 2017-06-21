import React, { Component } from 'react';
import './App.css';
import ToDoInput from './ToDoInput';
import ToDoItems from './ToDoItems';
import DeleteDb from './DeleteDb';

const PouchDb = require('pouchdb');
const data = require('./db.js');
if (typeof window !== "undefined") {window.PouchDB = PouchDb};

const testdb = new PouchDb('testdb');
const doc1 = {_id: 'rystel', goals: []};
data.putDoc(testdb, doc1);

class App extends Component {

  constructor (props) {
    super(props);
    this.state = { goals: this.props.goals || [] }
  }

  componentWillMount() {
    data.getDoc(testdb, 'rystel')
    .then(res => {
      console.log('hawkeye ', res);
      this.setState({goals: res.goals});
    })
    console.log('gamora ', this.state);
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
        <ToDoItems goals={this.state.goals} />
        <DeleteDb deleteDb={this.deleteDb} />
      </div>
    );
  }
}

export default App;

