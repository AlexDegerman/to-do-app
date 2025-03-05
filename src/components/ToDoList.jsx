import ToDoItem from "./ToDoItem"
import '../styles/ToDoList.css'

const ToDoList = ({ tasks, toggleComplete, deleteTask }) => {

  return (
    <div className="task-list">
      {tasks.map(task =>
        <ToDoItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      )}
    </div>
  )
  
}

export default ToDoList