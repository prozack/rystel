import React from 'react';

class GetInfo extends React.Component {

  onClick = (e) => {
    this.props.getInfo();
  }

  render() {
    return (
      <div>
        <h3>Retrieve Database</h3>
        <br />
        <button onClick={this.onClick}>
           Retrieve Database
        </button>
        </div>
    )
  }
};

export default GetInfo;