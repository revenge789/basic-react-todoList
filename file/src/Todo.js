import React from 'react'

export default function Todo({todo, toggleTodo}) {
  
    function handleTodoClick(e){
        toggleTodo(todo.id)
    }
    return (
    <div>
        <label className="bg-almond p-1 m-1 block rounded-lg">
            <input className="mr-1 ml-3" type="checkbox" checked = {todo.complete} onChange={handleTodoClick}/>
        {todo.name}
        </label>
    </div>
  )
}
