import React from 'react'

export default class Form extends React.Component {

  constructor() {
    super();
    this.state = ({
      todo: ''
    })
  }

  updateNewTodo = evt => {
    this.setState({...this.state, todo: evt.target.value})
    console.log(this.state.todo);
  }

  submit = evt => {
    evt.preventDefault();
    if(this.state.todo !== '') {
      this.props.addItem(this.state.todo);
      this.setState({...this.state, todo: ''});
    }
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <input type='text' placeholder='new todo' value={this.state.todo} onChange={this.updateNewTodo}/>
        <button type='submit' onKeyDown={this.props.submit}>Add</button>
        <br />
        <br />
        <button onClick={() => this.props.toggleButtonName()}>{this.props.hideOn ? 'Show Completed' : 'Hide Completed'}</button>
      </form>
    )
  }
}
