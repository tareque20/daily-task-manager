import React from 'react';
import {connect} from 'react-redux';
import FilterLink from './FilterLink';
import {addTask, toggleTask} from '../actions';
import {SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED} from '../constants/types.js';


class TaskApp extends React.Component {
    constructor(props) {
        super(props);
        this.taskIndex = 0;

    }

    getVisibleTasks(tasks, filter){
        switch (filter) {
            case SHOW_ALL:
                return tasks;
            case SHOW_COMPLETED:
                // Use the `Array.filter()` method
                return tasks.filter(
                    t => t.completed
                );
            case SHOW_ACTIVE:
                return tasks.filter(
                    t => !t.completed
                );
            default:
                return task;
        }
    }

    render() {
        let taskList = this.getVisibleTasks(this.props.tasks, this.props.visibilityFilter);
        return (
            <div>
                <input ref={node => this.input = node}/>
                <button onClick={() => {
                    this.props.dispatch(addTask(this.input.value, this.taskIndex++));
                    this.input.value = "";
                }}>
                    Add Task
                </button>
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
                <p>
                    Show:
                    {' '}
                    <FilterLink
                        filter={SHOW_ALL}
                    >
                        All
                    </FilterLink>
                    {' '}
                    <FilterLink
                        filter={SHOW_ACTIVE}
                    >
                        Active
                    </FilterLink>
                    {' '}
                    <FilterLink
                        filter={SHOW_COMPLETED}
                    >
                        Completed
                    </FilterLink>
                </p>
            </div>
        );
    }
}

export default connect((state) => ({
    tasks: state.tasks,
    visibilityFilter: state.visibilityFilter,
}))(TaskApp);

