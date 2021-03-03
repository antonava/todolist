import { useState } from "react";

const TaskTable = ({ tasks, handleDelete }) => {
    
    const [checked, setChecked] = useState(false)

    const handleChange = (event) => {
        setChecked(!checked);
        console.log(event.target.id);
    }

    return ( 
        <div className="task-table">
            <ul className="task-list"> 
                {tasks.map((task) => (
                    <li className="task-list-item" key={task.id}> 
                        <input className="custom-checkbox" 
                        type="checkbox" 
                        id="checkbox"
                        checked={checked}
                        onChange={ handleChange }
                        /> 
                        <label htmlFor="checkbox" className="check-label">
                            <span className="check-label-checkbox"></span>
                            <span className="check-label-text">{ task.taskName }</span>
                        </label>
                        <span className="task-list-btn" title="Delete" onClick={()=> {handleDelete(task.id)}}></span>
                    </li> 
                ))}             
            </ul>
        </div> 
    );
}

export default TaskTable;