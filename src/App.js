import TaskInput from "./components/TaskInput";

function App() {
  return (
    <div className="container">
      <div className="task-container">
        <h1 className="header-title">To Do List</h1>
        <TaskInput />
      </div>
    </div>
  );
}

export default App;
