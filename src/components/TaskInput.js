const TaskInput = ({ taskName, handleSubmit, setTaskName }) => {

  return (
    <>
      <form className="task" onSubmit={handleSubmit}>
        <input
          className="task-input"
          type="text"
          placeholder="Add New Task"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <input className="task-submit" type="submit" value="" required title="Add Task" />
        {/** TODO: Если у элемента нет содержимого children то его нужно писать так <span className="btn" />  */}
        <span className="btn" />
      </form>
    </>
  );
};

export default TaskInput;
