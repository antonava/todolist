import { useState } from 'react';

import TaskItem from './TaskItem';

const TaskTable = ({ tasks, handleDelete }) => {
  // TODO:
  // У тебя хранится всегда одно булево выражение
  // Если ты определила общее состояние то зачеркиваться у тебя будут все элементы списка.
  // Лучше тогда такое состояние вынести в отдельный компонент, например TaskItem.
  // Если хочешь хранить состояние именно здесь, то здесь тебе нужно хранить объект,
  // где по индексу элемента ты будешь сохранять checked он или нет
  // например: { [taskId]: true, [taskId]: false },
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(!checked);
    console.log(event.target.id);
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
          // <li className="task-list-item" key={task.id}>
          //   <input
          //     className="custom-checkbox"
          //     type="checkbox"
          //     id="checkbox"
          //     checked={checked} //TODO: И здесь это выражение распространяется на все чекбоксы
          //     onChange={handleChange}
          //   />
          //   <label htmlFor="checkbox" className="check-label">
          //     <span className="check-label-checkbox"></span>
          //     <span className="check-label-text">{task.taskName}</span>
          //   </label>
          //   <span
          //     className="task-list-btn"
          //     title="Delete"
          //     onClick={() => { //TODO: Не пиши так обработчики, лучше выноси в отдельные функции как метод handleChange выше
          //       handleDelete(task.id);
          //     }}
          //   />
          // </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskTable;
