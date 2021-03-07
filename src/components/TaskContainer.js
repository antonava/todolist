import { useEffect, useState } from 'react';
import TaskInput from './TaskInput';
import TaskTable from './TaskTable';

const TaskContainer = (props) => {
    const [taskName, setTaskName] = useState('');
    const [data, setData] = useState(null);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const task = { taskName };
      
      fetch('http://localhost:8000/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task),
      })
        .then(() => {
          setData(data);
        })
        .catch((error) => {
          console.log(error.message); 
        });
        setTaskName('');
    };
  
    useEffect(() => {
      fetch('http://localhost:8000/tasks')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setData(data);
        });
    }, [taskName]);
  
    const handleDelete = (id) => {
      fetch('http://localhost:8000/tasks/' + id, {
        method: 'DELETE',
      })
      .then(() => {
        setData(data.filter((task) => task.id !== id));
      });
    };
  
    return ( 
        <div>
            <TaskInput taskName={taskName} handleSubmit={handleSubmit} setTaskName={setTaskName}/>
            {data && <TaskTable tasks={data} handleDelete={handleDelete} />}
        </div>
     );
}
 
export default TaskContainer;