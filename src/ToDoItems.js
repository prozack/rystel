import React from 'react';

class ToDoItems extends React.Component {

  render () {

    let variable = this.props.listValue.toString();
    console.log('link ', variable, ' ', this.props.list);

    if (variable === '' || variable === undefined || this.props.list === []) {
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

//pull the list variable into this component to render the correct array