import { useEffect, useState } from 'react'
import './App.css'
import ToDoList from './components/ToDoList'
import ToDoForm from './components/ToDoForm'

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Buy food", completed: false },
    { id: 2, text: "Walk dog", completed: false }
  ])

  const addTask = (text) => {
    setTasks([...tasks, {id: Date.now(), text, completed: false}])
  }

  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed} : task)
    )
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  return (
    <div>
    <h1>To-do App</h1>
    <ToDoForm addTask={addTask}/>
    <ToDoList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask}/>
    </div>
  )
}

export default App
