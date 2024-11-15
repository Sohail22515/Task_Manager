import React from 'react';
import { FaTrash } from 'react-icons/fa';

const Task = ({ task, deleteTask, updateTask }) => {

  const toggleCompletion = () => updateTask({ ...task, completed: !task.completed });
  const changePriority = (e) => {
    const newPriority = e.target.value;
    updateTask({ ...task, priority: e.target.value });
  };

  return (
    <div className={`task ${task.completed ? "completed" : ""}`}>
    <input type="checkbox" checked={task.completed} onChange={toggleCompletion} />
    <span>{task.title}</span>
    <select value={task.priority} onChange={changePriority}>
      <option value="Low">Low</option>
      <option value="Meduim">Meduim</option>
      <option value="High">High</option>
    </select>
    <FaTrash className="delete-icon" onClick={() => deleteTask(task.id)} />
  </div>
  )
}

export default Task
