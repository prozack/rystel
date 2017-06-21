import React from 'react';

class ToDoItems extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    const createItem = (item, index) => {
      return (
        <li key={this.props.goals.order}>{this.props.goals.title}</li>
      );
    };

    return <ul>{this.props.goals.map(createItem)}</ul>;
  }
};

export default ToDoItems;