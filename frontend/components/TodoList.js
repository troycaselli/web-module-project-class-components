import React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component {



  render() {
    return (
      <div>
        <h2>Todos:</h2>
        {this.props.todoList.map(item => {
          return <Todo 
            key={item.id}
            item={item}
            toggleStrike={this.props.toggleStrike}
            hideOn={this.props.hideOn}/>;
        })}
      </div>
    )
  }
}
