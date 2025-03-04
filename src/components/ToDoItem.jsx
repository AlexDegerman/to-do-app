
const ToDoItem = ({ task, toggleComplete }) => {

  return (
    <div>
      <input 
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />
      <span> {task.text} </span>
    </div>
  )
}

export default ToDoItem