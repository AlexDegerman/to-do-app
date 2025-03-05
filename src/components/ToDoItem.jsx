import { Trash2Icon } from "lucide-react"
import '../styles/ToDoItem.css'

const ToDoItem = ({ task, toggleComplete, deleteTask }) => {

  const formatDate = (timestamp) => {
    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    }
    return new Date(timestamp).toLocaleDateString("en-GB", options)
  }

  return (
    <div className={`task-item ${task.completed ? "task-completed" : ""}`}>
      <input 
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />
      <div className="task-text">
        <span>{task.text}</span>
        <span className="task-date">{formatDate(task.id)}</span>
      </div>
      <button className="task-delete" onClick={() => deleteTask(task.id)}><Trash2Icon size={16}/></button>
    </div>
  )
  
  
}

export default ToDoItem