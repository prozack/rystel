import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDo from './ToDo';

const PouchDb = require('pouchdb');
const data = require('./db.js');

const testdb = new PouchDb('testdb');

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDo />
      </div>
    );
  }
}

export default App;
