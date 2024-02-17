
import React, {useState, useRef, useEffect} from "react";
import TodoList from "./TodoList";
import {v4} from 'uuid';

const LOCAL_STORAGE_KEY="todosApp.todos"

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedTodos) setTodos(storedTodos);
  },[])

  useEffect(()=> {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos])

  function toggleTodo(id){
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e){
    const name = todoNameRef.current.value
    if (name ==='') return
    setTodos(prevTodos => {
      return [...prevTodos, {id: v4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }

  function handleClearTodos(e) {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    <>
      <TodoList todos ={todos} toggleTodo={toggleTodo}/>
      <div className="flex justify-center m-2">
        <input className="mr-3"ref={todoNameRef} type="text"/>
        <button className=" bg-red-600 active:bg-red-700 rounded-full p-1 pl-2 pr-2 text-sm border-2 border-red-800"onClick={handleAddTodo}>Add Todo</button>
      </div>
      <div className="flex justify-center m-2">
      <button className="rounded-full bg-black text-white p-2 pl-4 pr-4" onClick={handleClearTodos}>Clear Complete Todos</button>
      </div>
      <div className="text-xl text-center p-2">{todos.filter(todo => !todo.complete).length} left to do</div>
    </ >
  )
}

export default App;
