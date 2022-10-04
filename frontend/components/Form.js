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
    this.props.addItem(evt, this.state.todo);
    this.setState({...this.state, todo: ''});
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <input type='text' placeholder='new todo' value={this.state.todo} onChange={this.updateNewTodo}/>
        <button type='submit' onKeyDown={this.props.submit}>Add</button>
        <br />
        <br />
        <button >Hide Completed</button>
      </form>
    )
  }
}
