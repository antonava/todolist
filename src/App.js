import React from 'react';

import TaskContainer from './components/task-container';

function App() {
  return (
    <div className="container">
      <div className="task-container">
        <h1 className="header-title">To Do List</h1>
        <TaskContainer />
      </div>
    </div>
  );
}

export default App;
