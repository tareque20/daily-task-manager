import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {ADD_TASK, TOGGLE_TASK} from '../constants/types.js';;

class TaskApp extends React.Component {
    constructor(props) {
        super(props);
        this.taskIndex = 0;

    }

    render() {
        //console.log(this.props.store.getState());
        console.log(this.taskIndex);
        return (
            <div>
                <button onClick={() => {
                    this.props.store.dispatch({
                        type: ADD_TASK,
                        text: 'Test',
                        id: this.taskIndex++
                    });
                }}>
                    Add Task
                </button>
                <ul>
                    {this.props.store.getState().tasks.map(task =>
                        <li key={task.id}>
                            {task.text}
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default TaskApp;

