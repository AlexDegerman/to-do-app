import { Trash2Icon } from "lucide-react"

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
    <div>
      <input 
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />
      <span> {task.text} </span>
      <span> {formatDate(task.id)} </span>
      <button onClick={() => deleteTask(task.id)}><Trash2Icon/></button>
    </div>
  )
}

export default ToDoItem