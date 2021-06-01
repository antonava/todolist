import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { sendTask } from '../actions/tasks';

const TaskInput = () => {
  const [taskName, setTaskName] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(sendTask(taskName));

    setTaskName('');
  };

  return (
    <>
      <form className="task" onSubmit={handleSubmit} >
        <input
          className="task-input"
          type="text"
          placeholder="Add New Task"
          value={taskName}
          onChange={handleChange}
          name="taskName"
        />
        <input className="task-submit" type="submit" value="" required title="Add Task" />
        <span className="btn" />
      </form>
    </>
  );
};

export default TaskInput;
