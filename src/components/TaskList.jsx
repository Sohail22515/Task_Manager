import React, { useState,useEffect } from 'react';
import Task from './Task';
import './List.css'
const TaskList = ({ tasks, deleteTask, updateTask }) => {

  const [sortOption, setSortOption] = useState(()=>{
    return localStorage.getItem('sortOption') || "None";
  })

  useEffect(() => {
    localStorage.setItem('sortOption', sortOption);
  }, [sortOption]);


  const sortedTasks = [...tasks].sort((a, b) => {
    if (sortOption === "Priority") return a.priority.localeCompare(b.priority);
    if (sortOption === "Completion") return a.completed - b.completed;
    return 0;
  });

  return (
    <div>
      <select onChange={(e) => setSortOption(e.target.value)}>
        <option value="None">Sort by</option>
        <option value="Priority">Priority</option>
        <option value="Completion">Completion</option>
      </select>
      <div className="task-list">
        {sortedTasks.map(task => (
          <div className='list'><Task key={task.id} task={task} deleteTask={deleteTask} updateTask={updateTask} /></div>
        ))}
      </div>
      
    </div>
  )
}

export default TaskList
