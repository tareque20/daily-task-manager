import {ADD_TASK, TOGGLE_TASK} from '../constants/types.js';

const task = (state, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case TOGGLE_TASK:
            if (state.id !== action.id) {
                return state;
            }

            return {
                id: state.id,
                text: state.text,
                completed: !state.completed
            };
        default:
            return state;
    }
}

const tasks = (state = [], action) => {
    switch (action.type) {
        case ADD_TASK:
            return [...state, task(undefined, action)];
        case TOGGLE_TASK:
            return state.map(t => task(t, action));
        default:
            return state;
    }
};


export default tasks;