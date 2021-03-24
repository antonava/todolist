import { handleActions } from 'redux-actions';

import {
    setTasks,
    setTask,
    removeTask
} from '../actions/tasks';

const initState = {
    isInProgress: false,
    isSuccess: false,
    tasks: [],
};

export const tasks = handleActions(
    {
        [setTasks]: (state, { payload }) => ({
            ...state,
            tasks: payload,
        }),
        [setTask]: (state, { payload }) => ({
            ...state,
            tasks: [
                ...state.tasks,
                payload,
            ],
        }),
        [removeTask]: (state, { payload }) => ({
            ...state,
            tasks: state.tasks.filter((task) => task.id !== payload)
        }),
    },
    initState,
);
