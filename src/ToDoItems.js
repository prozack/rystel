import React from 'react';

class ToDoItems extends React.Component {

  constructor (props) {
     super(props);
     this.state = {listValue: this.props.listValue};
  }

      //       <ul>
      //   {this.props.goals.map((goal) => 
      //   <li key={goal.order}>{goal.text}</li>
      //   )}
      // </ul>

  render () {

    let variable = this.state.listValue;

    return (
       <ul>
        {this.props.variable.map((value) => 
        <li key={value.order}>{value.text}</li>
        )}
      </ul> 
    )
  }
};

export default ToDoItems;

//pull the list variable into this component to render the correct array