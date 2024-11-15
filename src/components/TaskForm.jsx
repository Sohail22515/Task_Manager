import React from 'react'
import { useState} from 'react'

const TaskForm = ({ addTask }) => {

    const [title, setTitle] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!title.trim()) return;
//     addTask({ id: Date.now(), title, completed: false, priority: "Normal" });
//     setTitle("");
//   };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTask(title);
      setTitle(''); // Clear the input after adding a task
    } else {
      console.error("Title is empty or invalid"); // Log an error if title is empty
    }
  };
    
  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default TaskForm