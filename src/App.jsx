import { useEffect, useState } from 'react'
import './App.css'
import ToDoList from './components/ToDoList'
import ToDoForm from './components/ToDoForm'
import SortDropDown from './components/SortDropDown'

const App = () => {

  const loadTasks = () => {
    const savedTasks = localStorage.getItem("tasks")
    return savedTasks ? JSON.parse(savedTasks) : []
  }

  const [tasks, setTasks] = useState(loadTasks)
  const [sortOrder, setSortOrder] = useState("newest")
  const [filterStatus, setFilterStatus] = useState("all")

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  },[tasks])

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

  const sortedTasks = [...tasks].sort((a, b) => {
    if (sortOrder === "newest") {
      return b.id - a.id
    } else if (sortOrder === "oldest") {
      return a.id - b.id
    }
    return 0
  })

  const filteredTasks = sortedTasks.filter((task) => {
    if (filterStatus === "completed") return task.completed
    if (filterStatus === "uncompleted") return !task.completed
    return true
  })

  const handleSortChange = (e) => {
    setSortOrder(e.target.value)
  }

  return (
    <div>
    <h1>To-do App</h1>
    <ToDoForm addTask={addTask}/>
    <SortDropDown sortOrder={sortOrder} sortChange={handleSortChange} filterStatus={filterStatus} filterChange={(e) => setFilterStatus(e.target.value)}/>
    <ToDoList tasks={filteredTasks} toggleComplete={toggleComplete} deleteTask={deleteTask}/>
    </div>
  )
}

export default App
