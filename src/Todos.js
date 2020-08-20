import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  state = {
    todos: []
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.state.todos.push(e.target.value)
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.newTodo} onChange={this.handleChange} />
          <button>Add</button> 
        </form>
        <div>
          {
            this.state.todos.map(task => <input key={JSON.stringify(task)}> {task.todo} </input>)
          }
        </div>
      </div>
    )
  }
}
