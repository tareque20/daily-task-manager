import React from 'react';
import {connect} from 'react-redux';
import {addTask} from '../actions/index';


class AddTask extends React.Component {
    constructor(props) {
        super(props);
        this.taskIndex = 0;
    }

    render() {
        return (
            <div>
                <input ref={node => this.input = node}/>
                <button onClick={() => {
                    this.props.dispatch(addTask(this.input.value, this.taskIndex++));
                    this.input.value = "";
                }}>
                    Add Task
                </button>
            </div>
        );
    }
}

export default connect((state) => ({
    state
}))(AddTask);

