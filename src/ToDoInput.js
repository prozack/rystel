import React from 'react';

class ToDoInput extends React.Component {

	//item = '';
  constructor (props) {
     super(props);
     this.state = { item: '' };
  }

  // shouldComponentUpdate (nextProps) {
  //   let currentView = this.props.listValue;
  //   console.log('doc ock ', currentView, ' ', nextProps.listValue)
  //   if (currentView === undefined || currentView === nextProps.listValue) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
    
  onChange = (e) => {
  	this.setState({item: e.target.value});
  	//this.item = e.target.value;
  }

  handleSubmit = (e) => {
  	event.preventDefault();
    console.log(this.state.item);
    this.props.addToDo(this.state.item);
    //this.props.addToDo(this.item);
  	//this.setState({item: '', listValue: this.state.listValue }, () => this.refs.item.focus());
  }

  render() {
    return (
      <div>
        <h1>ToDo</h1>
        <br />
        <div className='input'>
          <form onSubmit={this.handleSubmit}>
            <label>
              Enter task:
              <input type='text' ref='item' onChange={this.onChange} value={this.state.item} />
            </label>
            <br />
              <input type='submit' value='Submit' />
            </form>
        </div>
      </div>
    )
  }
};

export default ToDoInput;

