import React, { Component } from 'react';
import './App.css';
import InitializeDb from './InitializeDb';
import ListSwitch from './ListSwitch';
import ToDoInput from './ToDoInput';
import ToDoItems from './ToDoItems';
import DeleteDb from './DeleteDb';

const PouchDb = require('pouchdb');
const data = require('../db.js');
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

  listValue = '';

  state = { hero: '', hero_image: '', quote: '', goals: [], roadblocks: [], mindful: [] };

  // constructor (props) {
  //   super(props);
  //   this.state = { hero: '', hero_image: '', quote: '', goals: [], roadblocks: [], mindful: [] };

  //   //this.listValue = '';
  // }

  componentWillMount() {
    data.getDoc(testdb, 'rystel')
    .then(res => {
      this.setState({ hero: res.hero, hero_image: res.hero_image, quote: res.quote, 
        goals: res.goals, roadblocks: res.roadblocks, mindful: res.mindful });
    })
    console.log('captain america ', this.listValue);
  }

  // shouldComponentUpdate (nextProps) {
  //   let currentView = this.listValue;
  //   console.log('doc ock ', currentView, ' ', nextProps.listValue)
  //   if (currentView === undefined || currentView === nextProps.listValue) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  // componentDidUpdate(prevState, prevProps) {
  //   console.log('penguin ', prevState, ' ', prevProps)
  //   // this.setState({ listValue: prevState.listValue })
  // }

  initializeDb = () => {
    data.destroyDb(testdb);
    data.putDoc(testdb, doc);
    console.log('firing');
  }

  listSwitch = (value) => {
    // this.setState({
    //   listValue: value
    // }, () => {
    //   console.log('jessica jones ', this.listValue);
    // })
    this.listValue = value;
    this.setState(this.state)
    console.log('jessica jones ', value, ' ', this.listValue)
  }

  addToDo = (item) => {
    let list = this.listValue;
    console.log('batman ', list);
    data.addToList(testdb, 'rystel', list, item);
    this.setState(this.state)
  }

  deleteDb = () => {
    data.destroyDb(testdb);
    console.log("deleted")
  }

  render() {
    console.log('ned stark: ', this.listValue)
    return (
      <div className="App">
        <InitializeDb initializeDb={this.initializeDb} />
        <ListSwitch listSwitch={this.listSwitch} />
        <ToDoInput addToDo={this.addToDo} />
        {/* <ToDoItems listValue={this.state.listValue} list={this.state[this.state.listValue]} /> */}
        <ToDoItems listValue={this.listValue} list={this.state[this.listValue]} />
        <DeleteDb deleteDb={this.deleteDb} />
      </div>
    );
  }
}

export default App;
