import React, { Component } from 'react'
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends Component {

  state = {
    todos: [

    ]
  }

  deleteList = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })

    this.setState({
      todos
    }
    )
  }

  addTodo = (todo) => {
    todo.id = Math.random()
    let addTodo = [...this.state.todos, todo]
    this.setState({
      todos: addTodo
    })

  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Basic Todo's</h1>
        <Todos todos={this.state.todos} deleteList={this.deleteList} />
        <AddTodo addTodo={this.addTodo} />
        <footer className='center'>
          <p>&copy; Developed by Jack Pritom Soren</p>
        </footer>
      </div>
    );
  }
}

export default App;
