import { useDispatch, useSelector } from 'react-redux';

import { deleteTask } from '../actions/tasks';
import TaskItem from './TaskItem';

const TaskTable = () => {
  const { tasks } = useSelector(state => state.tasks);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="task-table">
      <ul className="task-list">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            handleDelete={() => handleDelete(task.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskTable;
