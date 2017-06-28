import React, { Component } from 'react';
import './App.css';
import InitializeDb from './InitializeDb';
import ListSwitch from './ListSwitch';
import ToDoInput from './ToDoInput';
import ToDoItems from './ToDoItems';
import DeleteDb from './DeleteDb';

const PouchDb = require('pouchdb');
const data = require('./db.js');
if (typeof window !== "undefined") {window.PouchDB = PouchDb};

const testdb = new PouchDb('testdb');
const doc = {
  "_id": "rystel",
  "hero": "",
  "hero_image": "",
  "quote": "",
  "goals": [],
  "roadblocks": [],
  "mindful": [],
}; 
data.putDoc(testdb, doc)

class App extends Component {

  constructor (props) {
    super(props);
    this.state = { hero: '', hero_image: '', quote: '', goals: [], roadblocks: [], mindful: [], listValue: '' }
  }

  componentWillMount() {
    data.getDoc(testdb, 'rystel')
    .then(res => {
      this.setState({ hero: res.hero, hero_image: res.hero_image, quote: res.quote, 
        goals: res.goals, roadblocks: res.roadblocks, mindful: res.mindful });
    })
  }

  initializeDb = () => {
    data.destroyDb(testdb);
    data.putDoc(testdb, doc);
    console.log('firing');
  }

  listSwitch = (value) => {
    this.setState({
      listValue: value
    }, () => {
      console.log('jessica jones ', this.state.listValue);
    })
  }

  addToDo = (item) => {
    let list = this.state.listValue;
    console.log('magneto ', list);
    //data.addToList(testdb, 'rystel', 'goals', item);
    data.addToList(testdb, 'rystel', list, item);
  }

  deleteDb = () => {
    data.destroyDb(testdb);
    console.log("deleted")
  }

  render() {
    return (
      <div className="App">
        <InitializeDb initializeDb={this.initializeDb} />
        <ListSwitch listSwitch={this.listSwitch} />
        <ToDoInput addToDo={this.addToDo} />
        <ToDoItems list={this.state[this.state.listValue]} />
        <DeleteDb deleteDb={this.deleteDb} />
      </div>
    );
  }
}

export default App;
