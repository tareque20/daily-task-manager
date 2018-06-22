import {SET_VISIBILITY_FILTER, SHOW_ALL} from '../constants/types.js';

export default (state = SHOW_ALL, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}
