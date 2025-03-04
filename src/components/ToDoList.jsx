import ToDoItem from "./ToDoItem"

const ToDoList = ({ tasks, toggleComplete, deleteTask }) => {

  return (
    <div>
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