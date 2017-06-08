import React, { Component } from 'react';
import data from './db.js';
import testdb from './App.js';

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''}
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
  	this.setState({value: this.target.value})
  }

  handleSubmit(event) {
    let task = this.state.value;
  	data.addToList('testdb', '001', 'goals', task);
  	event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>ToDo</h1>
        <br />
        <div className='input'>
          <form onSubmit={this.handleSubmit}>
            <label>
              Enter task:
              <input type='text' className='task' value={this.state.value} onChange={this.handleChange} />
            </label>
            <br />
              <input type='submit' value='Submit' />
            </form>
        </div>
      </div>
    )
  }
};

export default ToDo;