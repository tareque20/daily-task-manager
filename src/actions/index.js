import {ADD_TASK, TOGGLE_TASK, SET_VISIBILITY_FILTER, SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED} from '../constants/types.js';

export const setVisibilityFilter = (filter) => {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    };
};

export const addTask = (text, id) => {
    return {
        type: ADD_TASK,
        text,
        id
    };
};

export const toggleTask = (id) => {
    return {
        type: TOGGLE_TASK,
        id
    };
};

export const getVisibleTasks = (tasks, filter) => {
    switch (filter) {
        case SHOW_ALL:
            return tasks;
        case SHOW_COMPLETED:
            return tasks.filter(
                t => t.completed
            );
        case SHOW_ACTIVE:
            return tasks.filter(
                t => !t.completed
            );
        default:
            return tasks;
    }
}

