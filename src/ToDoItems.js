import React from 'react';

class ToDoItems extends React.Component {

  render () {

    if (this.props.list === [] || this.props.list === undefined) {
      return (
        <ul>
        </ul>
      )
    } else {
      return (
         <ul>
          {this.props.list.map((value) => 
          <li key={value.order}>{value.text}</li>
          )}
        </ul> 
     )
    }
  }
};

export default ToDoItems;
