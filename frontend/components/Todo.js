import React from 'react';

export default class Todo extends React.Component {



  render() {
    return (
      <div className={this.props.item.completed ? 'todo strikethrough' : 'todo'} onClick={() => this.props.toggleStrike(this.props.item.id)}>
        <p>{this.props.item.name}</p>
      </div>
    )
  }
}
