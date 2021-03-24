import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { sendTask } from '../actions/tasks';

const TaskInput = () => {
  const [taskName, setTaskName] = useState('');
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTaskName(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(sendTask(taskName));

    setTaskName('');
  };

  return (
    <>
      <form className="task" onSubmit={handleSubmit}>
        <input
          className="task-input"
          type="text"
          placeholder="Add New Task"
          value={taskName}
          onChange={handleChange}
        />
        <input className="task-submit" type="submit" value="" required title="Add Task" />
        <span className="btn" />
      </form>
    </>
  );
};

export default TaskInput;
