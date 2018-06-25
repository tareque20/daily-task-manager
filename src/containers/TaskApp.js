import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {ADD_TASK, TOGGLE_TASK} from '../constants/types.js';

;

class TaskApp extends React.Component {
    constructor(props) {
        super(props);
        this.taskIndex = 0;

    }

    render() {
        //console.log(this.props.store.getState());
        //console.log(this.props);
        return (
            <div>
                <input ref={node => this.input = node}/>
                <button onClick={() => {
                    this.props.dispatch({
                        type: ADD_TASK,
                        text: this.input.value,
                        id: this.taskIndex++
                    });
                    this.input.value = "";
                }}>
                    Add Task
                </button>
                <ul>
                    {this.props.state.tasks.map(task =>
                        <li key={task.id} onClick={() => {
                            this.props.dispatch({
                                type: TOGGLE_TASK,
                                id: task.id
                            })
                        }}
                            style={{
                                textDecoration:
                                    task.completed ?
                                        'line-through' :
                                        'none'
                            }}>
                            {task.text}
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    state // prevent negative value
});

//export default TaskApp;
export default connect(mapStateToProps)(TaskApp);

