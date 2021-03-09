import React from 'react'

const Todos = ({ todos,deleteList }) => {

    const todoList = todos.length ? (
       todos.map((todo)=>{
           return (
               <div className="collection-item center " key={todo.id}>
                 <h5 onClick={()=>{deleteList(todo.id)}} >{todo.content}</h5>
               </div>
           )
       })
    ): 
    
    (
            <p className="center">You have no todo's left</p>
   )


return (
    <div className="todos collection">
       {todoList}
    </div>
)
}

export default Todos