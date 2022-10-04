import React from 'react';
import TodoList from './TodoList';
import Form from './Form';

const todoList = [
  {
    name: 'Add your todos here!',
    id: 1,
    completed: false
  }
]

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todoList: todoList
    }
  }

  addItem = (evt, item) => {
    evt.preventDefault();
    const newTodo = {
      name: item,
      id: Date.now(),
      completed: false
    }
  }

  render() {
    return (
      <div>
        <TodoList todoList={this.state.todoList} />
        <Form 
          addItem={this.addItem} />
      </div>
    )
  }
}
