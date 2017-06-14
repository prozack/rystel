import React, { Component } from 'react';
import data from './db.js';

class ToDoInput extends React.Component {
  constructor (props) {
     super(props);
     this.state = {item: ''};
  }
    
  onChange = (e) => {
  	this.setState({item: e.target.value});
  }

  handleSubmit = (e) => {
  	event.preventDefault();
    // let task = this.state.item;
    this.props.addToDo(this.state.item);
  	// data.addToList('testdb', 'rystel', 'goals', task);
  	this.setState({item: ''}, () => this.refs.item.focus());
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
              <input type='text' ref='item' onChange={this.onChange} value={this.state.item} />
            </label>
            <br />
              <input type='submit' value='Submit' />
            </form>
        </div>
      </div>
    )
  }
};

export default ToDoInput;

