import React from 'react';
import {connect} from 'react-redux';
import {SET_VISIBILITY_FILTER} from '../constants/types.js';


class FilterLink extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <a href='#'
               onClick={e => {
                   e.preventDefault();
                   this.props.dispatch({
                       type: SET_VISIBILITY_FILTER,
                       filter: this.props.filter
                   });
               }}
            >
                {this.props.children}
            </a>
        );
    }
}

//export default TaskApp;
export default connect((state) => ({
    state
}))(FilterLink);
