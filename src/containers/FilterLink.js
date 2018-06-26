import React from 'react';
import {connect} from 'react-redux';
import {setVisibilityFilter} from '../actions';


class FilterLink extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        let {filter} = this.props.filter;
        return (
            <a href='#'
               onClick={e => {
                   e.preventDefault();
                   this.props.dispatch(setVisibilityFilter(filter));
               }}
            >
                {this.props.children}
            </a>
        );
    }
}

export default connect((state) => ({
    state
}))(FilterLink);
