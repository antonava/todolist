import { createActions } from 'redux-actions';

export const {
    setTasks,
    setTask,
    removeTask,
} = createActions(
    'SET_TASKS',
    'SET_TASK',
    'REMOVE_TASK'
);

export const fetchTasks = () => async (dispatch) => {
    const res = await fetch('http://localhost:3001/all-tasks');
    const data = await res.json();

    dispatch(setTasks(data));
};

export const sendTask = (payload) => async (dispatch) => {
    const res = await fetch('http://localhost:3001/all-tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ taskName: payload }),
    });
    const result = await res.json();

    dispatch(setTask(result));
};

export const deleteTask = (payload) => async (dispatch) => {
    await fetch('' + payload, {
        method: 'DELETE',
    });
    console.log(payload);

    dispatch(removeTask(payload))
};
