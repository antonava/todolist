import { useDispatch, useSelector } from 'react-redux';

import { deleteTask } from '../actions/tasks';
import TaskItem from './TaskItem';

const TaskTable = () => {
  const { tasks } = useSelector(state => state.tasks);

  const dispatch = useDispatch();

  const handleDelete = (_id) => {
    dispatch(deleteTask(_id));
  };

  return (
    <div className="task-table">
      <ul className="task-list">
        {tasks.map((task) => (
          <TaskItem
            key={task._id}
            task={task}
            handleDelete={() => handleDelete(task._id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskTable;
