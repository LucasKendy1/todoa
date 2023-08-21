import { useEffect, useState } from 'react'
import styles from './App.module.css'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'
import Search from './components/Search'

function App() {
  const [todos, setTodos] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("https://monkfish-app-3stt6.ondigitalocean.app/todos",{
      
      method: "GET",
      headers:{
        'Content-Type': 'application/json',
      }
    })
    .then((resp) => resp.json())
    .then((data) => {
      setTodos(data)
    })
    .catch((err) => console.log(err))
  }, [])

  function addTodo(newTodo) {
    console.log(newTodo)
    fetch("https://monkfish-app-3stt6.ondigitalocean.app/todos",{
        method: 'POST',
        headers:{
          'Content-type': 'application/json',
        },    
        body: JSON.stringify(newTodo)
    }).then((
        resp => resp.json())
    .then((data) => {
        console.log(data)
      
    })
    ).catch(err => console.log(err))
  }
  
  const removeTodo = (id) => { 
    fetch(`https://monkfish-app-3stt6.ondigitalocean.app/todos/${id}`,{
      method: "DELETE",
      headers:{
        'Content-Type': 'application/json',
      }
    })
    .then((resp) => resp.json())
    .then((data) => {
      setTodos(todos.filter((todo) => todo.id !== id))
    })
    .catch((err) => console.log(err))
  }

  const completeTodo = (id, currentIsCompleted) => {

    const updateData = {
      isCompleted: !currentIsCompleted
    }

    fetch(`https://monkfish-app-3stt6.ondigitalocean.app/todos/${id}`,{
      method: 'PATCH',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateData)
    }).then(resp => resp.json())
    .then((data) =>{
      setTodos(data)
      window.location.reload()
    })
    .catch(err => console.log(err))
  }

  return (
    <div className={styles.main}>
    
      <h1 className={styles.h1}>To-do List</h1>

      <Search search={search} setSearch={setSearch}/>

      <div className={styles.todos}>
        {todos.filter((todo) => 
        todo.text.toLowerCase().includes(search.toLowerCase())).map((todo) => (
            <Todo todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} key={todo.id}/>
        ))}
      </div>

      <TodoForm addTodo={addTodo}/>

    </div>
  )
}
export default App
