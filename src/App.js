import React,{Component} from 'react'
import Todos from './Todos'

class App extends Component{
  
  state={
    todos:[
      {id:1, content:"work at 7am"},
      {id:2, content:"play fifa 21"}
    ]
  }

  deleteList = (id) =>{
     const todos = this.state.todos.filter(todo =>{
       return todo.id !== id
     })

     this.setState({
       todos
     }
     )
  }

  render(){
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Basic Todo's</h1>
        <Todos todos={this.state.todos} deleteList={this.deleteList}/>
      </div>
    );
  }
}

export default App;
