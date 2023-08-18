import styles from './Todo.module.css'
import {useState} from 'react'

const Todo = ({todo, removeTodo, completeTodo}) => {
  const [excluir, setExcluir] = useState(false)
  const [hover, setHover] = useState(false)

  function hoverContainer(){
    setHover(!hover)
  }

  function remove(){
    setExcluir(true)
    setTimeout(()=>{
      removeTodo(todo.id)
    },1000)
  }
  return (
    <div className={styles.containerTodo} style={
      {textDecoration: todo.isCompleted ? "line-through" : ""}
      } >

        {excluir &&(
          <div className={styles.vibrate_1}>
              aaaaaaaaaaaaa
          </div>
        )}

        <div className={styles.buttons}>
          <button onClick={() => completeTodo(todo.id, todo.isCompleted)} className={styles.complete}>
            <img src="../comentar-alt-check.png" alt="check" width="20px"/>
          </button>
          <button onClick={remove} className={styles.delete}>x</button>
        </div>

        <div className={styles.text}>
          {todo.text}
          {hover &&(
            <p onMouseEnter={hoverContainer} onMouseOut={hoverContainer}>({todo.category})</p>
          )}
        </div>
    
        
        
    </div>
  )
}

export default Todo
