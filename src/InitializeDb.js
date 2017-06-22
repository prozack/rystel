import React from 'react';

class InitializeDb extends React.Component {

  onClick = (e) => {
    this.props.initializeDb();
  }

  render() {
    return (
      <div>
        <h3>Initialize Database</h3>
        <br />
        <button onClick={this.onClick}>
           Initialize Database
        </button>
        </div>
    )
  }
};

export default InitializeDb;

//iterate on this component to do what you want (enter first document/clear old data our) and force a re-render