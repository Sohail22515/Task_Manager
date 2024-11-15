import React ,{ useState ,useEffect } from 'react'
import './App.css'
import './components/TaskManager.css';

import SearchBar from './components/SearchBar';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = ()=> {

  
  const [searchQuery, setSearchQuery] = useState("");
  
  const getStoredTasks = () => {
    if (typeof localStorage !== "undefined") {
      try {
        return JSON.parse(localStorage.getItem('tasks')) || [];
      } catch (error) {
        console.error("Error parsing tasks from localStorage:", error);
      }
    }
    return [];
  };

  const [tasks, setTasks] = useState(getStoredTasks);
  // Save tasks to localStorage whenever tasks change

  
  useEffect(() => {
    console.log("saving the value:", tasks[0]);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);



  // const addTask = (task) => setTasks([...tasks, task]);
  // const deleteTask = (id) => setTasks(tasks.filter(task => task.id !== id));
  // const updateTask = (updatedTask) => {
  //   setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
  // };

  // const filteredTasks = tasks.filter(task => task.title.toLowerCase().includes(searchQuery.toLowerCase()));



  const addTask = (title) => {
    // Check if title is a valid string
    if (!title || typeof title !== "string") {
      console.error("Invalid title:", title);  // Log invalid title
      return;
    }
  
    const newTask = {
      id: Date.now(),
      title: title.trim(), // Ensure title is a clean string
      completed: false,
      priority: "Normal",
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };
  



  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter(task => task.id !== id));
  };

  const updateTask = (updatedTask) => {
    setTasks((prevTasks) => 
      prevTasks.map(task => task.id === updatedTask.id ? updatedTask : task)
    );
  };

  console.log(tasks);
  const filteredTasks = tasks.filter(task => {
    if (typeof task.title !== "string") {
      console.warn("Task missing valid title:", task);
      return false;
    }
    return task.title.toLowerCase().includes(searchQuery.toLowerCase());
  });
  


  return (
    <>
      <div className="app">
      <h1>Task Manager</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <TaskForm addTask={addTask} />
      <TaskList tasks={filteredTasks} deleteTask={deleteTask} updateTask={updateTask} />
    </div>
    </>
  )
}

export default App
