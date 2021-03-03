import { useEffect, useState } from "react";
import TaskTable from "./TaskTable"


const TaskInput = (props) => {

    const [taskName, setTaskName] = useState('');
    const [data, setData] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const task = {taskName};
        setTaskName('');

        fetch('http://localhost:8000/tasks', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(task)
        }).then (()=> {
            setData(data);
        }).catch((error) => {
            console.log(error.message);
        });
    }

    
    useEffect(() => {
        fetch('http://localhost:8000/tasks')
        .then(res => {
           return res.json();
        })
        .then(data => {
            setData(data);
        })
    }, [taskName])

    const handleDelete = (id) => {
        fetch('http://localhost:8000/tasks/' + id, {
            method: 'DELETE'
        }).then(() => {
            setData(data.filter(task => task.id !== id));
        }) 
    };

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
                <input
                className="task-submit"
                type="submit" 
                value=""
                required
                title="Add Task"
                />
                <span className="btn"></span>
        </form>
        {data && <TaskTable tasks={data} handleDelete={handleDelete}/>}
       </>
     );
}
 
export default TaskInput;