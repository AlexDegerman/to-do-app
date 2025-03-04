import { Trash2Icon } from "lucide-react"

const ToDoItem = ({ task, toggleComplete, deleteTask }) => {

  return (
    <div>
      <input 
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />
      <span> {task.text} </span>
      <button onClick={() => deleteTask(task.id)}><Trash2Icon/></button>
    </div>
  )
}

export default ToDoItem