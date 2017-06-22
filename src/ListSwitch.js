import React from 'react';

class ListSwitch extends React.Component {

  onClick = (e) => {
    this.props.listSwitch(e.target.value);
    console.log("Iceman ", e.target.value);
  }

  render() {
    return (
      <div>
        <h3>Switch List</h3>
        <br />
        <button onClick={this.onClick} value={'goals'}>
           Goals
        </button>
        <button onClick={this.onClick} value={'roadblocks'}>
           Roadblocks
        </button>
        <button onClick={this.onClick} value={'mindful'}>
           Mindful
        </button>
        </div>
    )
  }
};

export default ListSwitch;

//find way to pass the list variable back to props to be used elsewhere