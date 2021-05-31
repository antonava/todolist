import { useState } from 'react';

const TaskItem = ({ task, handleDelete }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
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

export default TaskItem;
