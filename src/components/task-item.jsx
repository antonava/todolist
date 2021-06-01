/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TaskItem = ({ task, handleDelete }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prevState) => !prevState);
  };

  return (
    <li className="task-list-item" key={task._id}>
      <input
        className="custom-checkbox"
        type="checkbox"
        id={`checkbox-${task._id}`}
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor={`checkbox-${task._id}`} className="check-label">
        <span className="check-label-checkbox" />
        <span className="check-label-text">{task.taskName}</span>
      </label>
      <span
        className="task-list-btn"
        title="Delete"
        onClick={handleDelete}
      >
      </span>
    </li>
  );
};

TaskItem.PropTypes = {
  task: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  taskName: PropTypes.string.isRequired,
};

export default TaskItem;
