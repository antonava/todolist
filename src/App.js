import TaskContainer from "./components/TaskContainer";

function App() {
  return (
    <div className="container">
      <div className="task-container">
        <h1 className="header-title">To Do List</h1>
        {/** TODO: Сюда лучше вставляей компонент контейнер, например TaskContainer (подробности смотри в TaskInput) */}
        <TaskContainer />
      </div>
    </div>
  );
}

export default App;
