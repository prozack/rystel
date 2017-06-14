import React, { Component } from 'react';

class DeleteDb extends React.Component {
  constructor (props) {
  	super(props)
  }

  onClick = (e) => {
    this.props.deleteDb;
  }

  render() {
    return (
      <div>
        <h3>Delete Database</h3>
        <br />
        <button onClick={this.onClick}>
           Delete Database
        </button>
        </div>
    )
  }
};

export default DeleteDb;