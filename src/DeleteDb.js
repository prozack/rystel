import React from 'react';

class DeleteDb extends React.Component {

  onClick = (e) => {
    this.props.deleteDb();
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