import React from 'react';
// eslint-disable-next-line import/no-unresolved
import TaskContainer from './components/TaskContainer';

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
