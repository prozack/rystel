import React from 'react';

class ToDoItems extends React.Component {

  render () {

    console.log('magneto: ', this.props.list)

    if (this.props.list === undefined || this.props.list.length === 0 ) {
      return (
        <ul>
        This page intentionally left blank.
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
