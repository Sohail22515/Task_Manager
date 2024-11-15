# Task Manager Application

## Overview

The **Task Manager Application** is a simple yet powerful tool built using ReactJS to help users manage their daily tasks efficiently. The application supports adding, searching, deleting, and organizing tasks while persisting data in the browser's local storage, ensuring the tasks are retained even after refreshing the page.

---

## Features

1. **Add Tasks**  
   Users can input a title for a task and add it to the task list.

2. **Delete Tasks**  
   Tasks can be deleted from the list as needed.

3. **Task Persistence**  
   All tasks are saved in the browser's local storage, ensuring they are retained even after refreshing the page.

4. **Search Tasks**  
   A search bar allows users to find tasks easily by typing part of the task's title.

5. **Mark Tasks as Completed**  
   Users can toggle the completion status of a task.

6. **Priority Setting**  
   Each task is assigned a default priority, and tasks can be sorted by priority.

7. **Sorting Options**  
   Tasks can be sorted by priority or completion status for better organization.

8. **Responsive User Interface**  
   The app features a modern and responsive UI with sleek animations and a clean dark theme.

---

## Setup and Launch Process

### 1. Clone the Repository

```bash
git clone https://github.com/Sohail22515/task-manager.git
cd task-manager
```

### 2. Install Dependencies
Make sure you have Node.js and npm installed. Run the following command to install project dependencies:

```bash
npm install
```

### 3. Start the Development Server
Launch the app in development mode:
```bash
npm run dev
```

## Assumptions Made During Development

1. **Task Validation**:  
   - Task titles are mandatory and must be non-empty strings. 
   - Invalid inputs (e.g., empty tasks or non-string titles) are ignored with appropriate console warnings in the browser's developer console.

2. **Default Priority**:  
   - All tasks are assigned a default priority of "Normal" unless modified later during an enhancement.

3. **Local Storage**:  
   - The browser's local storage is used to persist tasks. If the local storage is cleared manually, all tasks will be lost.

4. **Sorting and Filtering**:  
   - Sorting functionality includes sorting by task priority or completion status. 
   - The search functionality allows users to search tasks by matching a partial or full title.

5. **UI Assumptions**:  
   - The app assumes the users prefer a clean, dark-themed UI for better readability.
   - Components like the search bar, task list, and task form are styled for responsiveness.

---

## Technologies Used

- **ReactJS**: The primary frontend framework used for building the UI and managing component state.
- **JavaScript**: The main programming language used in the project.
- **CSS**: For styling the components and implementing responsive design.
- **Local Storage API**: To save and retrieve tasks locally, ensuring persistence across page reloads.
- **Node.js and npm**: For setting up the project environment and managing dependencies.

