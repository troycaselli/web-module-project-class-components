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

  render() {
    return (
      <form>
        <input type='text' placeholder='new todo' value={this.state.todo} onChange={this.updateNewTodo}/>
        <button type='submit' onClick={this.props.addItem} onKeyDown={this.props.addItem}>Add</button>
        <br />
        <br />
        <button >Hide Completed</button>
      </form>
    )
  }
}
