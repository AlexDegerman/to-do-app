import { useState } from 'react'
import './App.css'
import ToDoList from './components/ToDoList'

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Buy food", completed: false },
    { id: 2, text: "Walk dog", completed: false }
  ])

  return (
    <div>
    <h1>To-do App</h1>
    <p>add new task</p>
    <ToDoList tasks={tasks}/>
    </div>
  )
}

export default App
