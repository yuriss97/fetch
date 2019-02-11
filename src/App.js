import React from 'react'
import './info.css'
import TodoItem from './TodoItem'
import Fetching from './fetch'

function App(){
  return(
    <div className="todo-list">
      <TodoItem p='So pode aparecer este'/>
      <TodoItem p='E este tambem'/>
      <Fetching />
    </div>
  )
}

export default App