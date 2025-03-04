import ToDoItem from "./ToDoItem"

const ToDoList = ({ tasks, toggleComplete }) => {

  return (
    <div>
      {tasks.map(task =>
        <ToDoItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
        />
      )}
    </div>
  )
}

export default ToDoList