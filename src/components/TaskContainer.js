import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchTasks } from '../actions/tasks';
import TaskInput from './TaskInput';
import TaskTable from './TaskTable';

const TaskContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      <TaskInput />
      <TaskTable />
    </div>
  );
}

export default TaskContainer;
