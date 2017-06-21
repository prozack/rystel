import React from 'react';

class ToDoItems extends React.Component {


  render () {

    return (
      <ul>
        {this.props.goals.map((goal) => 
        <li key={goal.order}>{goal.text}</li>
        )}
      </ul>
    )
  }
};

export default ToDoItems;