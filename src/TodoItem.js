import React from 'react'
import './info.css'

const TodoItem = props => {
  return(
    <div class='todo-item'>
      <input type="checkbox"></input>
      <p style={{display:props.p ? 'block' : 'none'}}>{props.p}</p>
    </div>
  )
}

export default TodoItem

