import { useState } from "react"

const ToDoForm = ({ addTask }) => {
  const [text, setText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    addTask(text)
    setText("")

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Add a new task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default ToDoForm