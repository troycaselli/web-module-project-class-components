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
    const newTodo = {
      name: item,
      id: Date.now(),
      completed: false
    }
    console.log(newTodo);
    this.setState({...this.state, todoList: [...this.state.todoList, newTodo]});
  }

  toggleStrike = id => {
    console.log(id);
    this.setState({...this.state, todoList: this.state.todoList.map(todo => {
      if(todo.id === id) {
        return {...todo, completed: !todo.completed}
      }
      return todo;
    })})
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <TodoList todoList={this.state.todoList} toggleStrike={this.toggleStrike}/>
        <Form 
          addItem={this.addItem} />
      </div>
    )
  }
}
