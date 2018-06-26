import React from 'react';
import {connect} from 'react-redux';
import {toggleTask, getVisibleTasks} from '../actions/index';


class Tasks extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {tasks, visibilityFilter} = this.props;
        let taskList = getVisibleTasks(tasks, visibilityFilter);
        return (
            <ul>
                {(taskList || []).map(task =>
                    <li key={task.id} onClick={() => {
                        this.props.dispatch(toggleTask(task.id))
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
        );
    }
}

export default connect((state) => ({
    tasks: state.tasks,
    visibilityFilter: state.visibilityFilter,
}))(Tasks);
